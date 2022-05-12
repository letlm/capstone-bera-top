import { useContext } from "react";
import { ApiContext } from "../../providers/ApiProvider";

import BeerCard from "../BeerCard";

// import { Container } from './styles';

function BeersShowcase() {
  const { products } = useContext(ApiContext);
  console.log(products);
  return (
    <>
      {products.map((product, index) => (
        <BeerCard key={index} product={product} />
      ))}
    </>
  );
}

export default BeersShowcase;
