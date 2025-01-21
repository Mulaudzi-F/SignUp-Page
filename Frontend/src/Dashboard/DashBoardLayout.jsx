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
        <DashBoardSideNav />
        <UserTutorCards />
        <DashBoardFooter />
      </section>
    </>
  );
}
