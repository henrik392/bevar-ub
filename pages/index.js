import Head from "next/head";
import Image from "next/image";
import FrontPage from "../components/FrontPage";
import Description from "../components/Description";
import AboutUs from "../components/AboutUs";
import Product from "../components/Product";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Bevar UB</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="">
        <FrontPage />
        <Description />
        <AboutUs />
        <Product />
        {/* <hr className="absolute w-screen text-red-500 top-[240px]" /> */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
