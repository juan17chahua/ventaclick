import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="flex-grow w-full section-responsive my-4 lg:my-6 section-responsive">
        {children}
      </main>
      <Footer />
    </div>
  );
};

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export default Layout;
