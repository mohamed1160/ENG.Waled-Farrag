import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
      <div className="min-h-screen w-full flex flex-col bg-black text-white">
          {/* Navbar ثابت */}
          <Navbar />

          {/* هنا الصفحات بتتغير */}
          <main className="flex-1">
              <Outlet />
          </main>

          {/* Footer ثابت */}
          <Footer />
      </div>
  );
}
