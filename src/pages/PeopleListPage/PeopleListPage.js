import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as UTIl from "utils";
import * as S from "./styles";
import * as C from "components";

const PeopleListPage = () => {
  const itemsPerPage = 20;
  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState(UTIl.createEmptyArray(itemsPerPage));
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [searched, setSearched] = useState("");
  const [params, setParams] = useState(null);

  const loadData = async (params) => {
    setIsLoading(true);
    const response = params.query
      ? await API.loadSearchedPeople(params)
      : await API.loadPopularPeople(params);

    setPeople(response?.results || []);
    setTotalItems(response?.total_results || 0);
    setIsLoading(false);
  };

  const updateParams = (page, searched) => {
    setParams((params) => ({
      ...params,
      page,
      query: searched,
    }));
  };

  useEffect(() => {
    return params && loadData(params);
  }, [params]);

  useEffect(() => {
    return updateParams(page, searched);
  }, [page, searched]);

  return (
    <S.Container>
      <S.Title>Popular People</S.Title>

      <S.Options>
        <C.UI.Search
          placeholder='Search a Person'
          isLoading={isLoading}
          onChange={setSearched}
          style={{ margin: "40px 7px 10px" }}
        />
      </S.Options>

      <C.PeopleList people={people} />

      <C.UI.Pagination
        itemsPerPage={20}
        initialPage={page}
        setCurrentPage={setPage}
        totalItems={totalItems}
      />
    </S.Container>
  );
};

export default PeopleListPage;
