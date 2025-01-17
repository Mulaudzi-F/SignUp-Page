import DashBoardHeader from "./DashBoardHeader";
import DashBoardSideNav from "./DashBoardSideNav";

export default function DashboardLayout() {
  return (
    <>
      <section className="h-screen w-full overflow-x-hidden">
        <DashBoardHeader />
        <DashBoardSideNav />
      </section>
    </>
  );
}
