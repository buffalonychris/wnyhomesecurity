import HomeSecurityPlanner from '../../pages/HomeSecurityPlanner';

const NewSiteHomeSecurityPlanner = () => (
  <HomeSecurityPlanner
    layout="newsite"
    routeOverrides={{
      discovery: '/newsite/home-security/fit-check',
      packages: '/newsite/home-security/packages',
      quote: '/newsite/quote',
    }}
  />
);

export default NewSiteHomeSecurityPlanner;
