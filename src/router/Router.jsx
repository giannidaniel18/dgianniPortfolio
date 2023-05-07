import { Route, Routes } from 'react-router-dom';

import ProjectsPage from '../Pages/ProjectsPage';
import HomePage from '../Pages/HomePage';
import ContactPage from '../Pages/ContactPage';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  );
}
