import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const ExperienceLayout = lazy(() => import('./layouts/experience/ExperienceLayout'));
const ExperienceHome = lazy(() => import('./pages/experience/ExperienceHome'));
const ExperienceCategoryPage = lazy(() => import('./pages/experience/ExperienceCategoryPage'));
const ExperienceSolutionsPage = lazy(() => import('./pages/experience/ExperienceSolutionsPage'));
const ExperienceSolutionDetailPage = lazy(
  () => import('./pages/experience/ExperienceSolutionDetailPage'),
);
const ExperienceNotFoundPage = lazy(() => import('./pages/experience/ExperienceNotFoundPage'));

const App = () => (
  <Suspense
    fallback={
      <main className="experience-loading" aria-live="polite">
        <p>Loading the private WNYHS experience…</p>
      </main>
    }
  >
    <Routes>
      <Route element={<ExperienceLayout />}>
        <Route index element={<ExperienceHome />} />
        <Route path="categories/:categorySlug" element={<ExperienceCategoryPage />} />
        <Route path="solutions" element={<ExperienceSolutionsPage />} />
        <Route path="solutions/:solutionSlug" element={<ExperienceSolutionDetailPage />} />
        <Route path="*" element={<ExperienceNotFoundPage />} />
      </Route>
    </Routes>
  </Suspense>
);

export default App;
