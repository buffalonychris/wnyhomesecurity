import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const host = '127.0.0.1';
const port = '4173';
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const viteBin = path.join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js');

let previewProcess;
let shuttingDown = false;

const runBuild = () =>
  new Promise((resolve, reject) => {
    const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    const build = spawn(npmCommand, ['run', 'build'], {
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

      reject(new Error(`npm run build exited with code ${code ?? 'null'} signal ${signal ?? 'null'}`));
    });
  });

const shutdown = () => {
  if (shuttingDown) return;
  shuttingDown = true;

  if (!previewProcess || previewProcess.killed || previewProcess.exitCode !== null) {
    process.exit(0);
  }

  const forceExit = setTimeout(() => {
    if (previewProcess && !previewProcess.killed && previewProcess.exitCode === null) {
      previewProcess.kill('SIGKILL');
    }
    process.exit(0);
  }, 4_000);

  forceExit.unref();
  previewProcess.once('exit', () => process.exit(0));
  previewProcess.kill('SIGTERM');
};

process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
process.once('SIGHUP', shutdown);

try {
  await runBuild();

  previewProcess = spawn(process.execPath, [viteBin, 'preview', '--host', host, '--port', port], {
    cwd: rootDir,
    stdio: 'inherit',
    windowsHide: true,
  });

  previewProcess.once('error', (error) => {
    if (!shuttingDown) {
      console.error(error);
      process.exit(1);
    }
  });

  previewProcess.once('exit', (code, signal) => {
    if (!shuttingDown) {
      process.exit(code ?? (signal ? 1 : 0));
    }
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
