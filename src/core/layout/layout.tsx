import { useState } from "react";
import Header from "../components/header";
import ErrorPage from "../components/pages/ErrorPage";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isError, setIsError] = useState<boolean>(false);
  return (
    <>
      {isError ? (
        (setIsError(false), (<ErrorPage errorMessage={""} />))
      ) : (
        <>
          <Header />
          <main>
            <Outlet />
            {children}
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
