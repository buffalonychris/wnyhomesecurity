const VendorSelfQualificationChecklist = () => {
  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <p>Answer Yes or No to each item below. The notes clarify what we need to see.</p>
      <ul className="list">
        <li>
          <span />
          <span>
            <strong>Offline operation</strong>
            <br />
            Core functions stay available without internet access.
          </span>
        </li>
        <li>
          <span />
          <span>
            <strong>Local control interface</strong>
            <br />
            Documented LAN APIs or protocols allow local control.
          </span>
        </li>
        <li>
          <span />
          <span>
            <strong>Cloud and subscription independence</strong>
            <br />
            No mandatory cloud accounts or subscription fees for core use.
          </span>
        </li>
        <li>
          <span />
          <span>
            <strong>Brand authority</strong>
            <br />
            Vendor branding can be fully suppressed in customer-facing UX and packaging.
          </span>
        </li>
        <li>
          <span />
          <span>
            <strong>Deterministic behavior</strong>
            <br />
            Firmware behavior is stable, explainable, and documented.
          </span>
        </li>
        <li>
          <span />
          <span>
            <strong>Ethical posture</strong>
            <br />
            No audio monitoring, no video monitoring, and no GPS required for core operation.
          </span>
        </li>
      </ul>
      <p style={{ marginTop: '0.75rem' }}>
        If any answer is No, this platform is not a fit right now.
      </p>
    </div>
  );
};

export default VendorSelfQualificationChecklist;
