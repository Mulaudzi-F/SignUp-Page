import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const AppLayOut = () => {
  return (
    <main className="grid gap-8 h-screen">
      <section className="flex flex-col gap-9">
        <Header />
        <div className="flex justify-center items-center">
          <Outlet />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AppLayOut;
