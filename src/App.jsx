import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import MainLayout from './layout/MainLayout'

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<MainLayout />}>
                  <Route path="/" element={<Homepage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}
