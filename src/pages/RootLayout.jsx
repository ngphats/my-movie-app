import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ModalProvider from "../providers/ModalProvider.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <Header />
        <Outlet />
      </ModalProvider>
    </ThemeProvider>
  );
};
export default RootLayout;
