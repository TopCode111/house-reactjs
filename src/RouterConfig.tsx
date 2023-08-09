import { useEffect } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Top from "./pages/Top";
import Blogs from './pages/Blogs';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsBusiness from "./pages/TermsBusiness";
import TermsUser from "./pages/TermsUser";
import ScrollReveal from "scrollreveal";

export default function RouterConfig(): JSX.Element {
  const reveral = (
    className: string,
    duration: number,
    distance: number,
    origin: string,
    delay: number = 0
  ) => {
    ScrollReveal().reveal(`.${className}`, {
      duration,
      origin,
      distance: `${distance}px`,
      opacity: 0,
      easing: "ease-in",
      delay,
    });
  };

  useEffect(() => {
    reveral("rtl", 1500, 50, "right");
    reveral("btt", 500, 30, "bottom");
    reveral("btt-d-1", 500, 50, "bottom", 300);
    reveral("btt-d-2", 500, 50, "bottom", 600);
    reveral("btt-d-3", 500, 50, "bottom", 900);
  }, []);

  const Layout = (): JSX.Element => {
    return (
      <div className="bg-gray-50">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Top />, index: true },
        { path: "/blogs", element: <Blogs />, index: true },
        { path: "/user-terms", element: <TermsUser />, index: true },
        { path: "/biz-terms", element: <TermsBusiness />, index: true },
        { path: "/privacy-policy", element: <PrivacyPolicy />, index: true },
      ],
    },
  ]);

  return (
    <div className="bg-gray-50">
      <RouterProvider router={router} />
    </div>
  );
}
