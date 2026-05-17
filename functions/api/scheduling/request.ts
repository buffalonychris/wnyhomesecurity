import { SCHEDULING_STATUSES, buildSchedulingBoundaryDiagnostics } from './_boundary';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const onRequest: PagesFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return json({ ok: false, errorCode: 'METHOD_NOT_ALLOWED', userMessage: 'Unsupported request method.' }, 405);
  }

  return json({
    ok: true,
    status: 'NOT_IMPLEMENTED',
    schedulingStatus: SCHEDULING_STATUSES.PENDING_OWNER_CONFIRMATION,
    message: 'Scheduling request creation boundary reserved for SCHED-IMPL003.',
    boundaries: buildSchedulingBoundaryDiagnostics(),
  });
};
