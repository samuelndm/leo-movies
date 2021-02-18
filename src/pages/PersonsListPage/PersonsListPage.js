import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as UI from "components/UIComponents";

const PersonsListPage = () => {
  const itemsPerPage = 20;
  const [isLoading, setIsLoading] = useState(false);
  const [persons, setPersons] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [searched, setSearched] = useState("");
  const [params, setParams] = useState({
    page,
    query: searched,
  });

  const loadData = async (params) => {
    setIsLoading(true);

    const response = params.query
      ? await API.loadSearchedPersons(params)
      : await API.loadPopularPersons(params);

    setPersons(response?.results || []);
    setTotalItems(response?.total_results || 0);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData(params);
  }, [params]);

  useEffect(() => {
    setParams((params) => ({
      ...params,
      page,
      query: searched,
    }));
  }, [page, searched]);

  return (
    <GS.PageContainer>
      <GS.PageTitle>Popular People</GS.PageTitle>

      <GS.PageOptions>
        <UI.Search
          placeholder="Search a Person"
          margin="40px 0 10px"
          isLoading={isLoading}
          onChange={setSearched}
        />
      </GS.PageOptions>

      <C.PersonsList persons={persons} />

      <UI.Pagination
        itemsPerPage={itemsPerPage}
        initialPage={page}
        setCurrentPage={setPage}
        totalItems={totalItems}
      />
    </GS.PageContainer>
  );
};

export default PersonsListPage;
