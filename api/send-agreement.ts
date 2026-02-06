import { handleEmailRequest } from './_email.js';

export default async function handler(req: { method?: string; body?: unknown }, res: any) {
  return handleEmailRequest(req, res, 'Agreement');
}
