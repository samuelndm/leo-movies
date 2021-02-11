import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { updateUrlParamByKey, removeUrlParamByKey } from "../../../utils/utils";
import { URL_PARAMS } from "../../../utils/constants";
import { resetPaginationUrl } from "../../../utils/paginationUtil";
import * as S from "./styles";

const Search = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    resetPaginationUrl(history);

    const url = `/search`;
    let params = "";

    if (keyword) {
      params = updateUrlParamByKey(
        history.location.search,
        URL_PARAMS.SEARCH,
        keyword
      );
    } else {
      params = removeUrlParamByKey(history.location.search, URL_PARAMS.SEARCH);
    }

    history.push(`${url}${params}`);
  };

  const toggleVisibility = (event) => {
    event.preventDefault();
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <S.Form isVisible={isVisible} onSubmit={handleSubmit}>
      <S.Input
        type='search'
        placeholder='Search'
        isVisible={isVisible}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <S.Button isVisible={isVisible} type='submit' onClick={toggleVisibility}>
        <S.Icon isVisible={isVisible} className='fas fa-search' />
      </S.Button>
    </S.Form>
  );
};

export default Search;
