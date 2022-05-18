import Image from "next/image";

const FrontPage = () => {
  return (
    <section
      id="front-page"
      className="responsive-padding pt-28 flex flex-row md:place-content-end h-[440px] lg:h-[580px]"
    >
      <div className="lader -rotate-[58deg] ">
        <Image
          className=""
          alt="Lader"
          src="/Lader.png"
          layout="fill"
          priority
        />
      </div>
      <div className="md:ml-auto md:text-right">
        <h1 className="">
          Beskytt <br /> laderen din
        </h1>
        <h3 className="mb-14">Montert på ett klikk</h3>
        <a href="#produkt" className="call-to-action">
          Kjøp nå
        </a>
      </div>
    </section>
  );
};

export default FrontPage;
