import { Outlet } from "react-router-dom";
import Header from "./components/landingpage/Header";
import Footer from "./components/landingpage/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
