import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-start">
        {children}
      </main>
      <Footer />
    </>
  );
}
