import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="om-oss"
      className="section place-content-between responsive-layout"
    >
      <div className="relative image-content h-[400px]">
        <Image
          alt="Lader seperat"
          src="/BevarInsta.jpg"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="lg:text-right text-content">
        <h2 className="">Vi ønsker mindre E-avfall</h2>
        <p>
          Etter hvert som man bruker ladere blir de slitt og ødelagt. Ikke bare
          er dette kostbart for deg, men også for klimaet. Dette er et problem
          vi i Bevar UB ønsker å løse. Vi er en gruppe engasjerte ungdommer på
          17 og 18 år. Vi er stolt over å tilby et produkt som kan forlenge
          livet til laderen både ved å forebygge at den blir ødelagt og reparere
          den når den blir knekt.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
