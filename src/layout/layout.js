import Navigation from "components/layout/navigation";
import Footer from "components/layout/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
