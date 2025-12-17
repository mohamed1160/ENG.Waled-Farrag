import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import MainLayout from './layout/MainLayout'
import WorkPage from './Pages/WorkPage';

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<MainLayout />}>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/work" element={<WorkPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}
