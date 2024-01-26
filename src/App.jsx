import { Outlet } from "react-router-dom";
import "./styles.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
