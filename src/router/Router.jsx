import { Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import PageNotFound from "pages/404";
import AdminPage from "pages/AdminPage";
import AuthPage from "pages/AuthPage";
import DashboardPage from "pages/DashboardPage";
import HomePage from "pages/HomePage";
import getProfile from "services/user";


function Router() {
    const { data, isLoading,error } = useQuery({
       queryKey: ["profile"],
       queryFn: getProfile()
    })
    console.log({ data, isLoading ,error});

    // if(isLoading) return <h1>در حال بروزرسانی </h1>
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default Router;
