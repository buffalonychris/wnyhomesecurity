import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DefaultLayout from './layouts/DefaultLayout';
import OperatorLayout from './layouts/OperatorLayout';

const Home = lazy(() => import('./pages/Home'));
const RetailLanding = lazy(() => import('./pages/RetailLanding'));
const HomeSecurity = lazy(() => import('./pages/HomeSecurity'));
const HomeSecurityPlanner = lazy(() => import('./pages/HomeSecurityPlanner'));
const Discovery = lazy(() => import('./pages/Discovery'));
const HomeAutomation = lazy(() => import('./pages/HomeAutomation'));
const ElderCareTech = lazy(() => import('./pages/ElderCare'));
const Packages = lazy(() => import('./pages/Packages'));
const PackageDetail = lazy(() => import('./pages/PackageDetail'));
const Comparison = lazy(() => import('./pages/Comparison'));
const Funding = lazy(() => import('./pages/Funding'));
const Reliability = lazy(() => import('./pages/Reliability'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Recommendation = lazy(() => import('./pages/Recommendation'));
const Quote = lazy(() => import('./pages/Quote'));
const QuoteReview = lazy(() => import('./pages/QuoteReview'));
const QuotePrint = lazy(() => import('./pages/QuotePrint'));
const Agreement = lazy(() => import('./pages/Agreement'));
const AgreementReview = lazy(() => import('./pages/AgreementReview'));
const AgreementPrint = lazy(() => import('./pages/AgreementPrint'));
const ESign = lazy(() => import('./pages/ESign'));
const Payment = lazy(() => import('./pages/Payment'));
const HomeSecurityPaymentSuccess = lazy(() => import('./pages/HomeSecurityPaymentSuccess'));
const HomeSecurityPaymentCanceled = lazy(() => import('./pages/HomeSecurityPaymentCanceled'));
const PaymentProcessing = lazy(() => import('./pages/PaymentProcessing'));
const Schedule = lazy(() => import('./pages/Schedule'));
const UAT = lazy(() => import('./pages/UAT'));
const LaunchUAT = lazy(() => import('./pages/LaunchUAT'));
const Resume = lazy(() => import('./pages/Resume'));
const Certificate = lazy(() => import('./pages/Certificate'));
const Verify = lazy(() => import('./pages/Verify'));
const ResumeVerify = lazy(() => import('./pages/ResumeVerify'));
const HealthHomes = lazy(() => import('./pages/HealthHomes'));
const HealthHomesOutcomes = lazy(() => import('./pages/HealthHomesOutcomes'));
const HealthHomesFunding = lazy(() => import('./pages/HealthHomesFunding'));
const HealthHomesPackages = lazy(() => import('./pages/HealthHomesPackages'));
const HealthHomesPilot = lazy(() => import('./pages/HealthHomesPilot'));
const HealthHomesOperations = lazy(() => import('./pages/HealthHomesOperations'));
const HealthHomesIntake = lazy(() => import('./pages/HealthHomesIntake'));
const HealthHomesPacket = lazy(() => import('./pages/HealthHomesPacket'));
const SeniorLanding = lazy(() => import('./pages/SeniorLanding'));
const FamilyLanding = lazy(() => import('./pages/FamilyLanding'));
const AgencyLanding = lazy(() => import('./pages/AgencyLanding'));
const HaloPushbutton = lazy(() => import('./pages/HaloPushbutton'));
const HaloPackage = lazy(() => import('./pages/HaloPackage'));
const HaloLanding = lazy(() => import('./pages/HaloLanding'));
const HaloSetup = lazy(() => import('./pages/HaloSetup'));
const HaloSupport = lazy(() => import('./pages/HaloSupport'));
const HaloPrivacy = lazy(() => import('./pages/HaloPrivacy'));
const HaloTerms = lazy(() => import('./pages/HaloTerms'));
const HaloCheckout = lazy(() => import('./pages/HaloCheckout'));
const VendorLanding = lazy(() => import('./pages/VendorLanding'));
const VendorStandards = lazy(() => import('./pages/VendorStandards'));
const VendorEvaluationToolkit = lazy(() => import('./pages/VendorEvaluationToolkit'));
const VendorQuestionnaire = lazy(() => import('./pages/VendorQuestionnaire'));
const VendorApply = lazy(() => import('./pages/VendorApply'));
const NeverMissAnotherEstimate = lazy(() => import('./pages/NeverMissAnotherEstimate'));
const Operator = lazy(() => import('./pages/Operator'));
const Demo = lazy(() => import('./pages/Demo'));
const Pricing = lazy(() => import('./pages/Pricing'));
const FiveDayDemo = lazy(() => import('./pages/FiveDayDemo'));
const Partners = lazy(() => import('./pages/Partners'));
const Support = lazy(() => import('./pages/Support'));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="container section">
          <p>Loading…</p>
        </div>
      }
    >
      <Routes>
        <Route element={<Layout />}>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<RetailLanding />} />
            <Route path="/halo-splash" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:id" element={<PackageDetail />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/reliability" element={<Reliability />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/recommend" element={<Recommendation />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/quoteReview" element={<QuoteReview />} />
            <Route path="/quotePrint" element={<QuotePrint />} />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/agreementReview" element={<AgreementReview />} />
            <Route path="/agreementPrint" element={<AgreementPrint />} />
            <Route path="/esign" element={<ESign />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/home-security/payment/success" element={<HomeSecurityPaymentSuccess />} />
            <Route path="/home-security/payment/canceled" element={<HomeSecurityPaymentCanceled />} />
            <Route path="/payment-processing" element={<PaymentProcessing />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/resume-verify" element={<ResumeVerify />} />
            <Route path="/uat" element={<UAT />} />
            <Route path="/launchUat" element={<LaunchUAT />} />
            <Route path="/sicar" element={<Certificate />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/health-homes" element={<HealthHomes />} />
            <Route path="/health-homes/outcomes" element={<HealthHomesOutcomes />} />
            <Route path="/health-homes/funding" element={<HealthHomesFunding />} />
            <Route path="/health-homes/packages" element={<HealthHomesPackages />} />
            <Route path="/health-homes/pilot" element={<HealthHomesPilot />} />
            <Route path="/health-homes/operations" element={<HealthHomesOperations />} />
            <Route path="/health-homes/intake" element={<HealthHomesIntake />} />
            <Route path="/health-homes/packet" element={<HealthHomesPacket />} />
            <Route path="/lp/senior" element={<SeniorLanding />} />
            <Route path="/lp/family" element={<FamilyLanding />} />
            <Route path="/lp/agency" element={<AgencyLanding />} />
            <Route path="/halo" element={<HaloLanding />} />
            <Route path="/home-security" element={<HomeSecurity />} />
            <Route path="/home-security/planner" element={<HomeSecurityPlanner />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/home-security/packages" element={<Navigate to="/packages?vertical=home-security" replace />} />
            <Route path="/home-security/add-ons" element={<Navigate to="/quote?vertical=home-security#addons" replace />} />
            <Route
              path="/home-security/how-it-works"
              element={<Navigate to="/reliability?vertical=home-security" replace />}
            />
            <Route path="/home-automation" element={<HomeAutomation />} />
            <Route path="/home-automation/packages" element={<Navigate to="/packages" replace />} />
            <Route path="/home-automation/add-ons" element={<Navigate to="/quote#addons" replace />} />
            <Route path="/home-automation/how-it-works" element={<Navigate to="/reliability" replace />} />
            <Route path="/elder-care-tech" element={<ElderCareTech />} />
            <Route path="/elder-care-tech/packages" element={<Navigate to="/packages" replace />} />
            <Route path="/elder-care-tech/add-ons" element={<Navigate to="/quote#addons" replace />} />
            <Route path="/elder-care-tech/how-it-works" element={<Navigate to="/reliability" replace />} />
            <Route path="/halo/setup" element={<HaloSetup />} />
            <Route path="/halo/support" element={<HaloSupport />} />
            <Route path="/halo/privacy" element={<HaloPrivacy />} />
            <Route path="/halo/terms" element={<HaloTerms />} />
            <Route path="/halo/checkout" element={<HaloCheckout />} />
            <Route path="/halo-pushbutton" element={<HaloPushbutton />} />
            <Route path="/halo-package" element={<HaloPackage />} />
            <Route path="/vendors" element={<VendorLanding />} />
            <Route path="/vendors/standards" element={<VendorStandards />} />
            <Route path="/vendors/evaluation-toolkit" element={<VendorEvaluationToolkit />} />
            <Route path="/vendors/questionnaire" element={<VendorQuestionnaire />} />
            <Route path="/vendors/apply" element={<VendorApply />} />
            <Route path="/never-miss-another-estimate" element={<NeverMissAnotherEstimate />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/5-day-demo" element={<FiveDayDemo />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/support" element={<Support />} />
          </Route>
          <Route element={<OperatorLayout />}>
            <Route path="/operator" element={<Operator />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
