import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Agreement = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate('/agreementReview', { replace: true, state: location.state });
  }, [location.state, navigate]);

  return null;
};

export default Agreement;
