import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as UI from "components/UIComponents";

const PersonsListPage = () => {
  const itemsPerPage = 20;
  const [persons, setPersons] = useState([]);
  const [page, setPage] = useState(1);
  const [params] = useState({
    page,
  });

  const loadData = async (params) => {
    const persons = await API.loadPopularPersons(params);
    setPersons(persons?.results || []);
  };

  useEffect(() => {
    loadData(params);
  }, [params]);

  return (
    <GS.PageContainer>
      <C.PersonsList persons={persons} />

      <UI.Pagination
        itemsPerPage={itemsPerPage}
        initialPage={page}
        setCurrentPage={setPage}
        totalItems={persons.length}
      />
    </GS.PageContainer>
  );
};

export default PersonsListPage;
