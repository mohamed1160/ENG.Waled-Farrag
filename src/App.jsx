import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import MainLayout from './layout/MainLayout'
import WorkPage from './Pages/WorkPage';
import { useEffect, useState } from 'react';
import MainLoader from './components/MainLoader';


export default function App() {
    //   const [isLoading, setIsLoading] = useState(true);

    //   useEffect(() => {
    //       // محاكاة جلب البيانات أو initial setup
    //       const timer = setTimeout(() => {
    //           setIsLoading(false); // بعد ما البيانات تتحمل نخفي اللودر
    //       }, 6000); // مثال: 2 ثانية

    //       return () => clearTimeout(timer);
    //   }, []);

    //   if (isLoading) return <MainLoader />;
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/work" element={<WorkPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
