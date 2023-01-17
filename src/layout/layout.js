import Navigation from "components/layout/navigation";
import Footer from "components/layout/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <aside style={{ maxWidth: "276px" }}>test</aside>
      <main style={{ maxWidth: "calc(100vw - 276px)" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
