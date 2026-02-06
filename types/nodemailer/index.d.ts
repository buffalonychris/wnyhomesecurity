declare module 'nodemailer' {
  export interface Transporter<T = SentMessageInfo> {
    sendMail(mailOptions: MailOptions): Promise<T>;
  }

  export interface MailOptions {
    from?: string;
    to?: string;
    subject?: string;
    text?: string;
    html?: string;
  }

  export interface SentMessageInfo {
    messageId: string;
  }

  export interface TransportOptions {
    host?: string;
    port?: number;
    secure?: boolean;
    auth?: {
      user?: string;
      pass?: string;
    };
  }

  export function createTransport(options: TransportOptions): Transporter;
}
