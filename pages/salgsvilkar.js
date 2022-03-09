import Head from "next/head";
import Script from "next/script";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Salgsvilkår = () => {
  return (
    <div>
      <Head>
        <title>Salgsvilkår - Bevar UB</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style>
          {`
          h2 {
            font-weight: 400 !important;
            margin-top: 2rem !important;
          }
          `}
        </style>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="py-16 responsive-padding">
        <h1 className="mb-8">Salgsvilkår</h1>
        <h2 className="font-normal">Innhold</h2>
        <ol className="ml-12 list-decimal">
          <li>Avtalen</li>
          <li>Partene</li>
          <li>Priser</li>
          <li>Avtaleinngåelse</li>
          <li>Ordrebekreftelse</li>
          <li>Betaling</li>
          <li>Levering m.v.</li>
          <li>Risikoen for varen</li>
          <li>Angrerett</li>
          <li>Undersøkelse av varen</li>
          <li>
            Reklamasjon ved mangel og frist for å melde krav ved forsinkelse
          </li>
          <li>Kjøperens rettigheter ved forsinkelse</li>
          <li>Kjøperens rettigheter ved mangel</li>
          <li>Selgerens rettigheter ved kjøperens mislighold</li>
          <li>Garanti</li>
          <li>Personopplysninger</li>
          <li>Konfliktløsning</li>
        </ol>
        <h2>1. Avtalen</h2>
        <p>
          Avtalen består, i tillegg til dette dokumentet, av opplysningene i
          nettbutikken og eventuell korespondanse du har hatt med oss i tiden
          før kjøpet. Hvis vi har avtalt noe før kjøpet som er bedre for deg enn
          det som står her, gjelder det som er avtalt. Hvis det står noe i denne
          avtalen som er bedre for deg enn det vi har avtalt er det dette
          dokumentet som gjelder (såfremt det ikke bryter med lovene).
        </p>
        <h2> 2. Partene</h2>
        <p>
          Selger, heretter kalt vi eller oss, er Bevar Ungdomsbedrift ved:
          Amalie skram videregående skole, Lungegårdskaien 40, 5015, BERGEN.
          Vårt organisasjonsnummer er 928 104 419. Du kan sende e post til
          bevarub@gmail.no eller du kan ringe nettbutikken direkte på telefon
          92852004. Kjøper er den person som foretar bestillingen, heretter kalt
          deg eller du.
        </p>
        <h2>3. Priser</h2>
        <p>
          Prisene i nettbutikken inkluderer merverdiavgift. Totalprisen, altså
          prisen du skal betale inkludert tillegg som frakt og avgifter, er
          oppgitt i nettbutikken når du bestiller. Dersom du bestiller varer til
          utlandet eller Svalbard blir merverdiavgift automagisk trukket fra.
        </p>
        <h2>4. Avtaleinngåelse</h2>
        <p>
          Avtalen er bindende både for deg og oss når vi har mottatt
          bestillingen. Hvis det har skjedd en feil som både du og vi burde
          forstå at er feil gjelder ikke dette. F.eks. hvis du trykket feil og
          bestilte 100 jakker men bare skulle ha 1 er du ikke bundet til å kjøpe
          100. Eller hvis du bestiller en sykkel som er gratis fordi det er feil
          i nettbutikken er vi ikke bundet til å gi deg sykkelen. Vi gir aldri
          bort varer gratis.
        </p>
        <h2>5. Ordrebekreftelse</h2>
        <p>
          Når vi har mottatt din bestilling sender vi deg en ordrebekreftelse så
          snart en av våre ansatte har sett ordren. Du bør sjekke at denne er
          riktig. Skulle du oppdage feil bør du si ifra til oss så fort du kan,
          så vi får rettet opp i det.
        </p>
        <h2>6. Betaling</h2>
        <p>
          All betaling på nettsiden gjennomføres gjennom Vipps sine
          betalingssystemer. Vi tilbyr ingen andre betalingsløsninger for
          bestilling av varer på nett. Om du mener det har skjedd en feil under
          betaling må du snarest ta kontakt med oss slik at vi kan løse
          problemet.
        </p>
        <h2>7. Levering</h2>
        <p>
          Vi sender varene så fort vi kan til adressen du oppga ved bestilling.
          Leveringstiden varierer med hvilken leveringsmetode du har valgt. Om
          du henter den hos oss, kan du hente den alle skoledager, om du velger
          å få den sendt i posten vil vi sende varen snarest vi har tid. Pakken
          sendes med brevpost og tiden det vanligvis tar er oppgitt når du
          bestiller. Det kan skje at varen blir forsinket utover tiden det
          vanligvis tar og som vi har opplyst deg når du bestilte, da får du
          beskjed. Hvis du har ombestemt deg og ikke ønsker varen likevel må du
          fremdeles ta den imot og sende den tilbake til oss. Hvis ikke tar vi
          betalt for både frakt og tid med å behandle din ordre, minst 50
          kroner. Men det er lov å ombestemme seg. Gir du oss beskjed før vi
          sender varen eller du sender varen(e) tilbake til oss koster det deg
          ingenting.
        </p>
        <h2>8. Risikoen for varen</h2>
        <p>
          Med risiko for varen mener vi hvem som har ansvaret for å erstatte
          eller reparere varen du har kjøpt dersom det skulle skje noe. Dette
          ansvaret er vårt frem til du har mottatt varen. Det regnes som at du
          har mottatt varen når den er levert dit du ønsket å få den levert.
        </p>
        <h2>9. Angrerett</h2>
        <p>
          Du kan alltid angre på kjøpet innen 14 dager fra du mottok varen(e).
          Om du angrer på hele bestillingen får du også refundert frakten og
          eventuelt andre gebyrer eller avgifter. Dersom du bare angrer på deler
          av bestillingen får du tilbake penger for varen(e) som er returnert.
          Varen som returneres må være ubrukt og salgbar for oss. Det vil si at
          merkelapper og slikt ikke må være fjernet. Har du f.eks. kjøpt
          laderbeskytter og den passer ikke på laderen kan du gjerne returnere
          den. Hvis det er noe feil med varen regnes dette som reklamasjon og
          det har vi skrevet om lengre ned.
        </p>
        <h2>10. Undersøkelse av varen</h2>
        <p>
          Når du mottar varen fra oss anbefaler vi at du sjekker at alt er som
          det skal, det vil si at du har fått rett produkt, om det er blitt
          skadet under transporten eller om det er noen andre mangler. Hvis du
          oppdager noen feil eller mangler må du melde fra om dette ved
          reklamasjon. Mer om dette i neste punkt.
        </p>
        <h2>11. Reklamasjon</h2>
        <p>
          En reklamasjon vil si at det er en feil eller mangel ved varen. Om du
          oppdager dette må du gi oss beskjed om det innen rimelig tid, og helst
          så snart som mulig. Dersom vi ikke har levert varen når vi har sagt at
          den skal leveres regnes dette også som en mangel og igjen må du gi oss
          beskjed innen rimelig tid. Denne beskjeden bør være skriftlig. Du kan
          reklamere senest to år etter at du fikk varen, eller fem år hvis det
          er varer som er ment til å vare vesentlig lengre.
        </p>
        <h2>12. Dine rettigheter ved forsinkelse</h2>
        <p>
          Dersom vi ikke leverer varen(e) eller leverer senere enn vi har avtalt
          og dette ikke er din skyld kan du, med forbrukerkjøpsloven i hånden,
          holde tilbake betaling, kreve at vi leverer, heve kjøpet eller kreve
          erstatning. Husk at om vi gir deg beskjed om at varen er forsinket
          leverer vi ikke senere enn avtalt. Men generelt er vi ikke vanskelige
          om du ikke vil ha varen likevel, bare du gir oss beskjed. Oppfyllelse:
          Du kan kreve at vi skal levere varen(e) innen rimelig tid dersom det
          ikke er umulig eller urimelig for oss å få dette til. Heving: Du kan
          kreve å gå fra kjøpet dersom forsinkelsen er vesentlig eller hvis vi
          ikke leverer innen en tilleggsfrist du har gitt. Erstatning: Du kan
          kreve erstatning for tap du lider som en følge av forsinkelsen. Slik
          erstatning står det mer om i Forbrukerkjøpslovens § 24. Husk at om du
          skal kreve noe av dette så må du gi oss beskjed om at du reklamerer på
          leveringstiden slik det står om i punkt 11.
        </p>
        <h2>13. Dine rettigheter ved mangel</h2>
        <p>
          Dersom varen har en mangel og dette ikke er din skyld kan du, fortsatt
          med forbrukerkjøpsloven i hånd, holde kjøpesummen tilbake, velge
          mellom retting og omlevering, kreve prisavslag, kreve avtalen hevet og
          erstatning fra selgeren. Retting eller omlevering: Du kan kreve at vi
          retter mangelen eller leverer ny tilsvarende vare såfremt dette ikke
          er umulig eller urimelig dyrt for oss. Skal vi reparare eller levere
          ny må vi gjøre det innen rimelig tid og uten vesentlig ulempe for deg.
          Vi kan velge om vi skal prøve å reparare eller levere ny, men ikke
          fler enn to ganger for samme feil. Prisavslag: Dersom mangelen ikke
          rettes eller omleveres, kan du kreve forholdsmessig prisavslag. Vi kan
          velge å heller prøve å reparere feilen eller gi deg en ny vare.
          Heving: I stedet for prisavslag kan du heve avtalen, men ikke når
          mangelen er uvesentlig. Vi kan velge å heller prøve å reparere feilen
          eller gi deg en ny vare. Erstatning: Du kan også kreve erstatning for
          økonomisk tap du lider som følge av at varen har en mangel. Dette står
          det mer om i Forbrukerkjøpslovens § 33. Husk at om du skal kreve noe
          av dette så må du gi oss beskjed om at du reklamerer på en mangel slik
          det står om i punkt 11. Husk at dette gjelder feil og mangler. Returer
          som skyldes skuffelse eller anger behandles under punkt 9.
        </p>
        <h2>14. Våre rettigheter</h2>
        <p>
          Dersom du ikke betaler eller oppfyller avtalen, og dette ikke er vår
          skyld, står det i forbrukerkjøpsloven at vi kan holde varen tilbake,
          kreve oppfyllelse av avtalen, kreve avtalen hevet samt kreve
          erstatning fra deg. Vi kan også kreve renter ved forsinket betaling,
          inkassogebyr og gebyr ved uavhentede varer. Dette skjer strengt tatt
          ikke fordi vi bruker Vipps som betalingsløsning og tilbyr ikke at man
          betaler senere. Oppfyllelse: Dersom du ikke betaler noe, kan vi
          fastholde kjøpet og kreve at du betaler, men dette gjelder bare hvis
          vi har levert deg varen(e) og ikke venter veldig lenge. Heving: Om du
          ikke betaler i det hele tatt kan vi heve kjøpet. Erstatning: Vi kan
          kreve erstatning fra deg for økonomisk tap vi lider som følge av
          kontraktsbrudd fra din side i følge Forbrukerkjøpslovens § 46.
        </p>
        <h2>15. Garanti</h2>
        <p>
          Det hender varer vi selger har garanti. En garanti er ekstra gode
          rettigheter og kan aldri være dårligere enn det vi har beskrevet her.
        </p>
        <h2>16. Personopplysninger</h2>
        <p>
          Ditt personvern er viktig for oss, og vi har derfor noen grunnleggende
          prinsipper:
        </p>
        <ol className="mt-1 ml-12 list-decimal">
          <li>Vi ber deg ikke om informasjon hvis vi ikke trenger det.</li>
          <li>
            Vi deler ikke din informasjon med noen andre med mindre du har gitt
            oss uttrykkelig tillatelse.
          </li>
          <li>
            Vi lagrer din informasjon med største fortrolighet og med fokus på
            ditt personvern og sikkerhet.
          </li>
          <li>
            Du kan alltid ta kontakt med oss (se punkt 2) dersom du lurer på hva
            vi har lagret om deg, eller om du ønsker at vi skal endre eller
            slette personopplysninger. Hvilken informasjon er det Bevar UB
            lagrer om meg og hvordan brukes det? Skriv navn. Vi synes det er
            hyggelig å vite hvem vi snakker til, dessuten må vi vite hvem vi
            skal levere varen(e) til.
          </li>
        </ol>
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

export default Salgsvilkår;
