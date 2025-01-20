import DashBoardFooter from "./DashboardFooter";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardSideNav from "./DashBoardSideNav";

export default function DashboardLayout() {
  return (
    <>
      <section className="h-screen gap-[34rem] w-full flex flex-col sm:block overflow-x-hidden">
        <DashBoardHeader />
        <DashBoardSideNav />
        <DashBoardFooter />
      </section>
    </>
  );
}
