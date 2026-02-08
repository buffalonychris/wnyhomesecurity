type WnyhsFunnelNoticeProps = {
  message: string;
};

const WnyhsFunnelNotice = ({ message }: WnyhsFunnelNoticeProps) => {
  return (
    <div className="wnyhs-funnel-notice" role="status">
      {message}
    </div>
  );
};

export default WnyhsFunnelNotice;
