import "bootstrap-icons/font/bootstrap-icons.css";

import SideNav from "./components/SideNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function App() {
  const _queryClient = new QueryClient();
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, []);

  return (
    <>
      <SideNav />

      <main className="main">
        <Hero />
        <About />
        <Resume />
        <QueryClientProvider client={_queryClient}>
          <Contact />
        </QueryClientProvider>
      </main>

      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center ">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Mario.</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="credits">
            Template by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {isPageLoading && <div id="preloader"></div>}
    </>
  );
}

export default App;
