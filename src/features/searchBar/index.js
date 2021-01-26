import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSearch } from "../../bookLibrarySlice.js";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearchedTextChange = (event) => {
    setSearchText(event.target.value);
    dispatch(addSearch(event.target.value));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search from below list"
        value={searchText}
        onChange={handleSearchedTextChange}
      />
    </form>
  );
}
