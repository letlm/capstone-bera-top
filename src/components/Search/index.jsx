import { useContext, useState } from "react";
import Magnifier from "../../assets/Magnifier.svg";
import { ApiContext } from "../../providers/ApiProvider";
import { SearchContext } from "../../providers/SearchProvider";
import { StyledContainer } from "./styles";

function Search() {
  const [changeSearch, setChangeSearch] = useState("");
  const { products } = useContext(ApiContext);
  const { setSearch } = useContext(SearchContext);

  const handleOnChange = (inputSearch) => {
    const filteredSearch = products.filter((beer) => {
      if (beer.name.toLowerCase().includes(inputSearch.toLowerCase())) {
        return beer.name.toLowerCase().includes(inputSearch.toLowerCase());
      } else if (
        beer.category.toLowerCase().includes(inputSearch.toLowerCase())
      ) {
        return beer.category.toLowerCase().includes(inputSearch.toLowerCase());
      }
      return null;
    });

    if (filteredSearch) {
      setSearch(filteredSearch);
    }
  };

  return (
    <StyledContainer>
      <input
        type="text"
        value={changeSearch}
        onChange={(event) => setChangeSearch(event.target.value)}
      />
      <img
        src={Magnifier}
        alt="lupa de pesquisa"
        onClick={() => handleOnChange(changeSearch, setChangeSearch(""))}
      />
    </StyledContainer>
  );
}

export default Search;
