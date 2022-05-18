import Container from "./styles";
import { useContext } from "react";
import { SearchContext } from "../../providers/SearchProvider";
import { ApiContext } from "../../providers/ApiProvider";

function NavBar() {
  const { setSearch } = useContext(SearchContext);
  const { products } = useContext(ApiContext);

  const getAveragePrice = (product) => {
    const sum =
      product.reviews &&
      product.reviews.reduce((previousValue, currentValue) => {
        return previousValue + Number(currentValue.price);
      }, product.initialPrice);
    const average = sum / (product.reviews.length + 1);
    return average;
  };

  const filterByPrice = (value) => {
    const sorted = [...products];
    sorted.sort((a, b) => getAveragePrice(a) - getAveragePrice(b));
    value === "menor" ? setSearch(sorted) : setSearch(sorted.reverse());
  };

  const filterByCategory = (category) => {
    const filtered = products.filter(
      (product) => product.category === category
    );
    setSearch(filtered);
  };

  const getAverageReview = (reviews) => {
    if (reviews.length > 0) {
      const average =
        reviews.reduce((a, b) => a + Number(b.stars), 0) / reviews.length;
      return average;
    } else return 0;
  };

  const sortByAverage = () => {
    const sortedByAverage = [...products];
    sortedByAverage.sort(
      (a, b) => getAverageReview(a.reviews) - getAverageReview(b.reviews)
    );
    setSearch(sortedByAverage.reverse());
  };

  return (
    <Container>
      <button onClick={() => setSearch([])}>Beras</button>

      <button onClick={() => sortByAverage()}>Tops</button>

      <div className="dropdown">
        <div className="dropbtn">Categorias</div>
        <div className="dropdown-content">
          <button className="select" onClick={() => filterByCategory("Wheat")}>
            Wheat
          </button>
          <button className="select" onClick={() => filterByCategory("Larger")}>
            Larger
          </button>
          <button className="select" onClick={() => filterByCategory("Pilsen")}>
            Pilsen
          </button>
          <button className="select" onClick={() => filterByCategory("IPA")}>
            IPA
          </button>
          <button className="select" onClick={() => filterByCategory("Ale")}>
            Ale
          </button>
          <button className="select" onClick={() => filterByCategory("Sour")}>
            Sour
          </button>
          <button className="select" onClick={() => filterByCategory("Porter")}>
            Porter
          </button>
          <button
            className="select"
            onClick={() => filterByCategory("German Heffeweizen")}
          >
            German Heffeweizen
          </button>
          <button className="select" onClick={() => filterByCategory("APA")}>
            APA
          </button>
          <button
            className="select"
            onClick={() => filterByCategory("Wood Aged")}
          >
            Wood Aged
          </button>
          <button className="select" onClick={() => filterByCategory("Tripel")}>
            Tripel
          </button>
        </div>
      </div>

      <div className="dropdown">
        <div className="dropbtn">Preço</div>
        <div className="dropdown-content">
          <button className="select" onClick={() => filterByPrice("menor")}>
            Menor
          </button>
          <button className="select" onClick={() => filterByPrice("maior")}>
            Maior
          </button>
        </div>
      </div>
    </Container>
  );
}

export default NavBar;
