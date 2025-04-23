import useDebounceValue from "@/customHook/useDebounceValue";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounceValue(search, 500);
  const [result, setResult] = useState([]);

  useEffect(()=>{

    //check if the given input is empty  or is there any space in that.
    if(debounceSearch.trim()===""){
        setResult([]);
        return;
    }

    const fetchTrain=async()=>{

        //here we can add the api  call  data ..
        const mock = ["Rajdhani", "Duronto", "Garib Rath", "Shatabdi"];
        //we can filter the data according what i tye inside the search data .
        const filtered=mock.filter(train=>train.toLowerCase().includes(debounceSearch.toLowerCase()))

        setResult(filtered)
    }

    fetchTrain();

  },[debounceSearch])

  return (
    <div style={{ padding: "1rem", maxWidth: "400px", margin: "auto" }}>
      <input
        type="text"
        placeholder="Search trains..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <ul style={{ marginTop: "1rem" }}>
      {result.map((train, index) => (
        <li key={index} style={{ padding: "0.25rem 0", borderBottom: "1px solid #eee" }}>
          {train}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Search;
