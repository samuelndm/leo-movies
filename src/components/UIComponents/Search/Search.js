import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as C from "components";

const Search = ({ placeholder, isLoading, onChange, style }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onChange(keyword);
  };

  return (
    <S.Form style={style} onSubmit={handleSubmit}>
      <S.Input
        type='search'
        aria-label={`${placeholder || "search"} input`}
        placeholder={placeholder || "Search"}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <S.Button type='submit' aria-label='search button' onClick={handleSubmit}>
        {isLoading ? (
          <C.UI.Spinner size={20} />
        ) : (
          <S.Icon className='fas fa-search' />
        )}
      </S.Button>
    </S.Form>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  margin: PropTypes.string,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default Search;
