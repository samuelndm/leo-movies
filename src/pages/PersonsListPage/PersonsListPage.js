import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as UI from "components/UIComponents";

const PersonsListPage = () => {
  const itemsPerPage = 20;
  const [persons, setPersons] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);

  const loadData = async (page) => {
    const response = await API.loadPopularPersons({ page });

    setPersons(response?.results || []);
    setTotalItems(response?.total_results || 0);
  };

  useEffect(() => {
    loadData(page);
  }, [page]);

  return (
    <GS.PageContainer>
      <GS.PageTitle>Most Popular Persons</GS.PageTitle>

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
