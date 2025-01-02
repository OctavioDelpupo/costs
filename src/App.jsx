import { Outlet } from "react-router-dom";

import NavBar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Container customClass="min-height">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;
