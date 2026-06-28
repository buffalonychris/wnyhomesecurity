import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { preview } from 'vite';

const host = '127.0.0.1';
const port = 4173;
const idleShutdownMs = 20_000;
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const viteBin = path.join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js');

let previewServer;
let idleTimer;
let sawRequest = false;
let shuttingDown = false;
let exiting = false;

const exitOnce = (code = 0) => {
  if (exiting) return;
  exiting = true;
  process.exit(code);
};

const runBuild = () =>
  new Promise((resolve, reject) => {
    const build = spawn(process.execPath, [viteBin, 'build'], {
      cwd: rootDir,
      stdio: 'inherit',
      windowsHide: true,
    });

    build.once('error', reject);
    build.once('exit', (code, signal) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`vite build exited with code ${code ?? 'null'} signal ${signal ?? 'null'}`));
    });
  });

const shutdown = () => {
  if (shuttingDown) return;
  shuttingDown = true;

  if (idleTimer) {
    clearTimeout(idleTimer);
  }

  const server = previewServer?.httpServer;

  if (!server) {
    exitOnce(0);
    return;
  }

  const forceExit = setTimeout(() => exitOnce(0), 4_000);
  forceExit.unref();

  server.close(() => {
    if (forceExit) {
      clearTimeout(forceExit);
    }
    exitOnce(0);
  });

  server.closeAllConnections?.();
};

process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
process.once('SIGBREAK', shutdown);
process.once('SIGHUP', shutdown);

const scheduleIdleShutdown = () => {
  if (!sawRequest || shuttingDown) return;
  if (idleTimer) {
    clearTimeout(idleTimer);
  }

  idleTimer = setTimeout(shutdown, idleShutdownMs);
  idleTimer.unref();
};

try {
  await runBuild();

  previewServer = await preview({
    root: rootDir,
    preview: {
      host,
      port,
      strictPort: true,
    },
  });

  previewServer.httpServer.on('request', () => {
    sawRequest = true;
    scheduleIdleShutdown();
  });
} catch (error) {
  console.error(error);
  exitOnce(1);
}
