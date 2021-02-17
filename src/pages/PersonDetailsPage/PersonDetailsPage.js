import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";

const PersonDetailsPage = ({ match }) => {
  const [personId] = useState(match?.params?.id);
  const [person, setPerson] = useState({});

  const loadData = async (personId) => {
    const person = await API.loadPersonDetailsById(personId);
    setPerson(person);
  };

  useEffect(() => {
    loadData(personId);
  }, [personId]);

  return (
    <GS.PageContainer>
      <C.PersonDetails person={person} />
    </GS.PageContainer>
  );
};

export default PersonDetailsPage;
