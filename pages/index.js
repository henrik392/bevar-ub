import Head from "next/head";
import FrontPage from "../components/FrontPage";
import Description from "../components/Description";
import AboutUs from "../components/AboutUs";
import Product from "../components/Product";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Script from "next/script";
import Banner from "../components/Banner";

const HomePage = () => {
  return (
    <div>
      <Banner />
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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EM2F144431"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-EM2F144431');
        `}
      </Script>
    </div>
  );
};

export default HomePage;
