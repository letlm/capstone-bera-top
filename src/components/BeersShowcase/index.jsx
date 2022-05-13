import { useContext } from "react";
import { ApiContext } from "../../providers/ApiProvider";
import { SearchContext } from "../../providers/SearchProvider";

import BeerCard from "../BeerCard";

// import { Container } from './styles';

function BeersShowcase() {
  const { products } = useContext(ApiContext);
  const { search } = useContext(SearchContext);
  console.log(search);

  return (
    <>
      {search.length > 0
        ? search.map((prodSearch, index) => (
            <BeerCard key={index} product={prodSearch} />
          ))
        : products.map((product, index) => (
            <BeerCard key={index} product={product} />
          ))}
    </>
  );
}

export default BeersShowcase;
