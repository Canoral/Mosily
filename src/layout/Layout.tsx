import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="layout h-screen rounded-box w-[98%] m-auto">
      <Header />
      <Outlet />
    </div>
  );
}
