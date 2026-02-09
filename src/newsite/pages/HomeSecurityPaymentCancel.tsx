import { NavLink } from 'react-router-dom';

const HomeSecurityPaymentCancel = () => {
  return (
    <div className="newsite-container">
      <section className="newsite-hero">
        <div>
          <span className="newsite-badge">Checkout canceled</span>
          <h1>Checkout canceled.</h1>
          <p>No charge was made for your Home Security deposit.</p>
          <p>
            Remaining balance is due on arrival (day of install) after a walkthrough confirmation.
          </p>
        </div>
        <div className="newsite-card">
          <strong>Return to deposit</strong>
          <p>Select a tier and restart secure checkout when you&apos;re ready.</p>
          <NavLink className="newsite-btn" to="/newsite/home-security/pay-deposit">
            Back to deposit
          </NavLink>
        </div>
      </section>

      <section className="newsite-section">
        <div className="newsite-surface">
          <h2>Need assistance?</h2>
          <p>Our team can help answer any questions about the deposit or installation timeline.</p>
          <div className="newsite-cta-row">
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/contact">
              Request callback
            </NavLink>
            <a className="newsite-btn newsite-btn-secondary" href="tel:17163912405">
              Call (716) 391-2405
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityPaymentCancel;
