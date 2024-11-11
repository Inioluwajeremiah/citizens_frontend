import Footer from "../components/landingpage/Footer";
import Header from "../components/landingpage/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="w-[80%] lg:w-[50%] mx-auto  mt-24">
        <p className="text-2xl font-bold text-center p-10">Page not Found</p>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
