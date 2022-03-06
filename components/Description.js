import Image from "next/image";

const Description = () => {
  return (
    <section
      id="description"
      className="section responsive-layout place-content-between bg-secondary-200"
    >
      <div className="text-left text-content">
        <h2 className="">Beskytt laderen med ett klikk</h2>
        <p className="mb-2">Laderenbeskytteren består av to deler:</p>
        <ul className="mb-2 ml-5 list-disc ">
          <li>En hard ytre del for beskyttelse</li>
          <li>En indre del av gummi for å få grep på laderen</li>
        </ul>
        <p>
          Beskytteren kommer i en tøypose produsert av Nordnes Verksteder. De
          tilbyr arbeidsplasser til personer som faller utenfor det ordinære
          arbeidslivet. Du kan lese om dem{" "}
          <a
            className="underline text-primary-800"
            href="https://nordnes-verksteder.no/om-oss/?gclid=EAIaIQobChMIntTN6O719QIVAdiyCh38kQxDEAAYASABEgIyivD_BwE"
          >
            her.
          </a>
        </p>
      </div>
      <div className="relative image-content">
        <Image
          alt="Lader seperat"
          src="/LaderSeperat.png"
          objectFit="contain"
          layout="fill"
          objectPosition={1 < 1024 ? "left" : "right"}
          // className="image-left"
        />
      </div>
    </section>
  );
};

export default Description;
