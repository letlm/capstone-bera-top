import { Container } from "./styles";
import { useContext } from "react";
import { SearchContext } from "../../providers/SearchProvider";
import { ApiContext } from "../../providers/ApiProvider";

function NavBar() {
  const { setSearch } = useContext(SearchContext);
  const { products } = useContext(ApiContext);

  function filterByPrice(value) {
    const sorted = [...products];
    sorted.sort((a, b) => a.initialPrice - b.initialPrice);
    value === "menor" ? setSearch(sorted) : setSearch(sorted.reverse());
  }

  function filterByCategory(category) {
    const filtered = products.filter(
      (product) => product.category === category
    );
    setSearch(filtered);
  }

  function getAverageReview(reviews) {
    if (reviews.length > 0) {
      const average =
        reviews.reduce((a, b) => a + Number(b.stars), 0) / reviews.length;
      return average;
    } else return 0;
  }

  function sortByAverage() {
    const sortedByAverage = [...products];
    sortedByAverage.sort(
      (a, b) => getAverageReview(a.reviews) - getAverageReview(b.reviews)
    );
    setSearch(sortedByAverage.reverse());
  }

  return (
    <Container>
      <button onClick={() => setSearch([])}>Beras</button>

      <button onClick={() => sortByAverage()}>Avaliações</button>

      <div>
        Tipos
        <button onClick={() => filterByCategory("Wheat")}>Wheat</button>
        <button onClick={() => filterByCategory("Larger")}>Larger</button>
        <button onClick={() => filterByCategory("Pilsen")}>Pilsen</button>
        <button onClick={() => filterByCategory("IPA")}>IPA</button>
        <button onClick={() => filterByCategory("Ale")}>Ale</button>
        <button onClick={() => filterByCategory("Sour")}>Sour</button>
        <button onClick={() => filterByCategory("Porter")}>Porter</button>
        <button onClick={() => filterByCategory("German Heffeweizen")}>
          German Heffeweizen
        </button>
        <button onClick={() => filterByCategory("APA")}>APA</button>
        <button onClick={() => filterByCategory("Wood Aged")}>Wood Aged</button>
        <button onClick={() => filterByCategory("Tripel")}>Tripel</button>
      </div>

      <button onClick={() => filterByPrice("menor")}>Menor</button>
      <button onClick={() => filterByPrice("maior")}>Maior</button>
    </Container>
  );
}

export default NavBar;
