import { useEffect } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/admin") {
      navigate("/admin/home", { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="w-screen h-screen flex flex-row items-start justify-start">
      <Sidebar />
      <main className="w-[80%] h-screen overflow-scroll border border-red-800 ">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
