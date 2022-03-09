import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const colors = [
  "Hvit",
  "Svart",
  "Rød",
  "Oransje",
  "Gul",
  "Grønn",
  "Blå",
  "Lilla",
  "Mørk rosa",
  "Lys rosa",
];

const products = [
  {
    quantity: 1,
    price: 49,
    id: "1stk",
    title: "1 stk - 49 kr",
    colorOption: true,
  },
  {
    quantity: 3,
    price: 119,
    id: "3stk",
    title: "3 stk - 119 kr [20% rabatt]",
    colorOption: true,
  },
  {
    quantity: 10,
    price: 299,
    id: "regnbuepakke",
    title: "Regnbuepakke (10 stk) - 299 kr [40% rabatt]",
    colorOption: false,
    staticColors: colors,
  },
  {
    quantity: 2,
    price: 99,
    id: "ukrainapakke",
    title: "Ukrainapakke (2 stk) - 99 kr [50% av overskudd går til Ukraina!]",
    colorOption: false,
    staticColors: ["Gul", "Blå"],
  },
];

const Product = () => {
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedColorId, setSelectedColorId] = useState([
    "hvit",
    "hvit",
    "hvit",
  ]);
  const [mailto, setMailto] = useState("mailto:bevarub@gmail.com");

  const [totalPrice, setTotalPrice] = useState(products[0].price.toFixed(2));

  useEffect(() => {
    const product = products.find(
      (product) => product.id === selectedProductId
    );
    setSelectedProduct(product);
    setTotalPrice(product.price);

    if (product.staticColors) {
      setSelectedColorId(
        product.staticColors.map((color) => color.toLowerCase())
      );
    } else {
      console.log(product.quantity);
      setSelectedColorId(Array(product.quantity).fill("hvit"));
    }
  }, [selectedProductId, selectedProduct.quantity]);

  useEffect(
    () =>
      setMailto(
        `mailto:bevarub@gmail.com?subject=Jeg%20vil%20bestille%20laderbeskytter%21&body=Bestillingsid%3A%20${uuidv4()}%0A%0AProdukt%3A%20${
          selectedProduct.title
        }%0AFarger%3A%20${
          selectedColorId[0][0].toUpperCase() +
          selectedColorId.join(", ").slice(1)
        }%0A%0AVil%20du%20hente%20pakken%20p%C3%A5%20Amalie%20Skram%20videreg%C3%A5ende%20skole%2C%20eller%20f%C3%A5%20den%20tilsendt%20til%20din%20postkasse%3F%0A%28Hente%2Ftilsendt%29%3A%20%5Bfyll%20inn%5D%0A%0AMin%20adresse%3A%20%5Bfyll%20inn%5D%0A%0ANavn%3A%20%5Bfyll%20inn%5D%0AMobilnummer%3A%20%5Bfyll%20inn%5D%0A%0AS%C3%A5%20snart%20du%20sender%20${totalPrice}%20kr%20til%20%23727173%20p%C3%A5%20Vipps%20skal%20vi%20sende%20varen%20din%20%F0%9F%A4%97`
      ),
    [selectedProductId, selectedColorId, totalPrice, selectedProduct.title]
  );

  return (
    <section id="produkt" className="section bg-primary-200">
      <h2 className="mb-10">Kjøp laderbeskytter</h2>
      <div className="place-content-between bg-clip-border responsive-layout">
        <div
          className="relative image-content lg:!h-[400px]"
          // style={{ position: "relative", width: "1000px", height: "100%" }}
        >
          <Image
            alt="Laderbeskytter farger"
            src="/Regnbue.gif"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
            unoptimized={true}
          />
        </div>
        <div className="flex flex-col text-content">
          <Dropdown
            title="Velg produkt"
            options={products.map((product) => {
              return { title: product.title, id: product.id };
            })}
            helpText="Rabatt og håndsydd tøypose om du velger flere!"
            setSelectedId={setSelectedProductId}
            selectedId={selectedProductId}
          />
          <SelectColorDropdowns
            colorOptions={colors.map((farge) => {
              return { title: farge, id: farge.toLowerCase() };
            })}
            setSelectedId={setSelectedColorId}
            selectedColors={selectedColorId}
            selectedProduct={selectedProduct}
          />

          <div className="mt-auto">
            <div className="flex flex-row items-center mx-4 mt-4 mb-6 font-bold place-content-between">
              <p className="text-3xl">{totalPrice} kr</p>
              <div className="flex items-center mt-3 text-primary-800 rounded-3xl place-content-center">
                <FaShippingFast className="" />
                <p className="ml-2 text-xl ">Gratis frakt!</p>
              </div>
            </div>
            {/* Remove a-tag when configured Vipps */}
            <a href={mailto}>
              <BuyButton selectedProduct={selectedProduct} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SelectColorDropdowns = ({
  colorOptions,
  setSelectedId,
  selectedColors,
  selectedProduct,
}) => {
  if (selectedProduct.staticColors) {
    return (
      <Dropdown
        title={"Farge"}
        options={[
          {
            title:
              selectedProduct.id.charAt(0).toUpperCase() +
              selectedProduct.id.slice(1),
            id: selectedProduct.id,
          },
        ]}
        setSelectedId={() => {}}
        selectedId={selectedProduct.id}
      />
    );
  }

  const dropDowns = [];
  for (let i = 0; i < selectedProduct.quantity; i++) {
    dropDowns.push(
      <div className="flex-1" key={i}>
        <Dropdown
          title={"Farge " + (selectedProduct.quantity > 1 ? i + 1 : "")}
          options={colorOptions}
          setSelectedId={(Id) => {
            let newSelectedColors = [...selectedColors];
            newSelectedColors[i] = Id;
            setSelectedId(newSelectedColors);
            console.log(newSelectedColors);
          }}
          selectedId={selectedColors[i]}
          id={i}
        />
      </div>
    );
  }
  return <div className="flex flex-row gap-2">{dropDowns} </div>;
};

const onBuyHandler = (selectedProduct) => {
  console.log(selectedProduct);
};

const BuyButton = (selectedProduct) => {
  return (
    <button
      onClick={() => onBuyHandler(selectedProduct)}
      className="flex items-center w-full h-10 p-2 font-bold text-white rounded-lg text-l bg-primary-300 border-primary-800 place-content-center"
    >
      <RiShoppingCartLine className="w-6 h-6 mr-2" />
      Kjøp
    </button>
  );
};

const Dropdown = ({
  title = "Title",
  options = {},
  helpText = "",
  setSelectedId,
  selectedId,
  id = "produkt",
}) => {
  console.log(title + ": " + selectedId);
  return (
    <div className="input-element">
      <h4 className="mx-4 mb-2">{title}</h4>
      <select
        className="w-full p-3 text-gray-600 bg-white border rounded-lg border-primary-800"
        onChange={(e) => {
          setSelectedId(e.target.value);
        }}
        value={selectedId}
        key={id}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))}
      </select>
      <p className="font-bold mx-4 my-2 text-[13px] text-primary-800">
        {helpText}
      </p>
    </div>
  );
};

// const QuantityInput = ({ initialValue = 1 }) => {
//   const [currentValue, setCurrentValue] = useState(initialValue || "");

//   function handleChange(evt) {
//     let value = evt.target.value;
//     if (value > 0) setCurrentValue(value);
//   }
//   return (
//     <div className="input-element">
//       <h4 className="mx-4 mb-2">Antall</h4>
//       <input
//         className="w-24 p-3 text-gray-600 bg-white border rounded-lg border-primary-800"
//         type="number"
//         value={currentValue}
//         onChange={(evt) => handleChange(evt)}
//       />
//     </div>
//   );
// };

export default Product;
