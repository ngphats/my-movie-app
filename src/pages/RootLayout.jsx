import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ModalProvider from "../providers/ModalProvider.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";
import { Suspense } from "react";
import Loading from "@components/Loading";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <Header />
        <Suspense fallback={<Loading/>}>
          <Outlet />
        </Suspense>
      </ModalProvider>
    </ThemeProvider>
  );
};
export default RootLayout;
