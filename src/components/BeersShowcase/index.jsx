import { useContext } from "react";
import { ApiContext } from "../../providers/ApiProvider";
import BeerCard from "../BeerCard";

function BeersShowcase() {
  const { products } = useContext(ApiContext);

  return (
    <>
      {products.map((product, index) => (
        <BeerCard key={index} product={product} />
      ))}
    </>
  );
}

export default BeersShowcase;
