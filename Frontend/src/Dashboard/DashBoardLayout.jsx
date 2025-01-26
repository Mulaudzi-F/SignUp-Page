import { Outlet } from "react-router";
import SessionCard from "../Features/SessionCard";
import UserCard from "../Features/UsersTutorCard";
import UserTutorCards from "../UI/TutorCards";
import DashBoardFooter from "./DashboardFooter";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardSideNav from "./DashBoardSideNav";

export default function DashboardLayout() {
  return (
    <>
      <section className="h-screen w-full flex flex-col sm:block overflow-x-hidden">
        <DashBoardHeader />
        <div className="flex gap-[9.5rem]">
          <DashBoardSideNav />
          <Outlet />
        </div>

        <DashBoardFooter />
      </section>
    </>
  );
}
