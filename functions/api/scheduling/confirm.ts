import { buildSchedulingBoundaryDiagnostics } from './_boundary';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const onRequest: PagesFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return json({ ok: false, errorCode: 'METHOD_NOT_ALLOWED', userMessage: 'Unsupported request method.' }, 405);
  }

  return json({
    ok: true,
    status: 'NOT_IMPLEMENTED',
    message: 'Owner confirmation boundary reserved for SCHED-IMPL004.',
    boundaries: buildSchedulingBoundaryDiagnostics(),
  });
};
