import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import MainLayout from "./layout/MainLayout";
import WorkPage from "./Pages/WorkPage";
import { useEffect, useState } from "react";
import MainLoader from "./components/MainLoader";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./api/routes/protectedRoute";
import SingleProjectPage from "./Pages/SingleProjectPage";

export default function App() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("hasVisited")) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
                localStorage.setItem("hasVisited", "true");
            }, 6000);

            return () => clearTimeout(timer);
        } else {
            setIsLoading(false); 
        }
    }, []);

    if (isLoading) return <MainLoader />;

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/work" element={<WorkPage />} />
                        <Route path="/work/project/:slug" element={<SingleProjectPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route
                            path="/AdminDashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
