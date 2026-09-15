import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import TransformationSection from './components/TransformationSection';
import SolutionSection from './components/SolutionSection';
import TransitionSection from './components/TransitionSection';
import AudienceSection from './components/AudienceSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import ClosingSection from './components/ClosingSection';

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <HeroSection />
      <ProblemSection />
      <TransformationSection />
      <SolutionSection />
      <TransitionSection />
      <AudienceSection />
      <PricingSection />
      <FaqSection />
      <ClosingSection />
    </div>
  );
}