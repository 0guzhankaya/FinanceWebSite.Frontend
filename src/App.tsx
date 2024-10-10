import { useState } from "react";
import { ChangeEvent, SyntheticEvent } from "react";
import { searchCompanies } from "./api";
import { CompanySearch } from "./company";
import CardList from "./Components/CardList/CardList";
import { Search } from "./Components/Search/Search";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };

  return (
    <div className="App">
      {serverError && <h1>Unable to connect to API</h1>}
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList searchResults={searchResult} />
    </div>
  );
}

export default App;
