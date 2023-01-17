import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="flex flex-col min-h-screen mx-12 my-6">{children}</main>
      <Footer />
    </>
  );
}
