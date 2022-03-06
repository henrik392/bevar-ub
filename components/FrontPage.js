import Image from "next/image";

const FrontPage = () => {
  return (
    <section
      id="front-page"
      className="responsive-padding pt-28 flex flex-row md:place-content-end h-[450px] lg:h-[600px]"
    >
      <div className="lader -rotate-[58deg] ">
        <Image className="" alt="Lader" src="/Lader.png" layout="fill"></Image>
      </div>
      <div className="md:text-right">
        <h1 className="">
          Beskytt <br /> laderen din
        </h1>
        <h3 className="mb-14">Super enkel å bruke</h3>
        <a href="#produkt" className="call-to-action">
          Kjøp nå
        </a>
      </div>
    </section>
  );
};

export default FrontPage;
