import Image from "next/image";
import { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { render } from "react-dom";

const Product = () => {
  // Create state for dropdown
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // Create state for quantity
  const [quantity, setQuantity] = useState(1);

  return (
    <section id="produkt" className="section bg-primary-200">
      <h2 className="mb-10">Laderbeskytter</h2>
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
            title="Produkt"
            options={{
              "1stk": ["1 stk - 49 kr"],
              "3stk": ["3 stk - 119 kr", "[19 %]"],
              regnbue: ["Regnbuepakke (10 stk) - 299 kr", "[39 %]"],
            }}
            helpText="Rabatt og håndsydd tøypose om du velger felere!"
          />
          {/* Create three dropdown elements */}

          <Dropdown
            title="Farge"
            id="farge"
            options={{
              hvit: ["Hvit"],
              svart: ["Svart"],
              rød: ["Rød"],
              oransje: ["Oransje"],
              gul: ["Gul"],
              grønn: ["Grønn"],
              blå: ["Blå"],
              lilla: ["Lilla"],
              rosa: ["Rosa"],
            }}
          />
          <div className="mt-auto">
            <div className="flex flex-row items-center mx-4 mt-4 mb-6 font-bold place-content-between">
              <p className="text-3xl">210 kr</p>
              <div className="flex items-center mt-3 text-primary-800 rounded-3xl place-content-center">
                <FaShippingFast className="" />
                <p className="ml-2 text-xl ">Gratis frakt!</p>
              </div>
            </div>
            <BuyButton />
          </div>
        </div>
      </div>
    </section>
  );
};

const BuyButton = () => {
  return (
    <button className="flex items-center w-full h-10 p-2 font-bold text-white rounded-lg text-l bg-primary-300 border-primary-800 place-content-center">
      <RiShoppingCartLine className="w-6 h-6 mr-2" />
      Kjøp
    </button>
  );
};

// Create component "dropdown"
const Dropdown = ({ title = "Title", id, options = {}, helpText = "" }) => {
  return (
    <div className="input-element">
      <h4 className="mx-4 mb-2">{title}</h4>
      <select
        id={id}
        className="w-full p-3 text-gray-600 bg-white border rounded-lg border-primary-800"
      >
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {options[key][0] + " "}
            {options[key][1] || ""}
          </option>
        ))}
      </select>
      <p className="mx-4 my-2 text-[13px] text-gray-700">{helpText}</p>
    </div>
  );
};

const QuantityInput = ({ initialValue = 1 }) => {
  const [currentValue, setCurrentValue] = useState(initialValue || "");

  function handleChange(evt) {
    let value = evt.target.value;
    if (value > 0) setCurrentValue(value);
  }
  return (
    <div className="input-element">
      <h4 className="mx-4 mb-2">Antall</h4>
      <input
        className="w-24 p-3 text-gray-600 bg-white border rounded-lg border-primary-800"
        type="number"
        value={currentValue}
        onChange={(evt) => handleChange(evt)}
      />
    </div>
  );
};

export default Product;
