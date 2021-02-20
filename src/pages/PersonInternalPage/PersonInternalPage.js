import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";

const PersonInternalPage = ({ match }) => {
  const [personId] = useState(match?.params?.id);
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState({});

  const loadData = async (personId) => {
    const person = await API.loadPersonDetailsById(personId);
    const credits = await API.loadPersonCreditsById(personId);

    setPerson(person);
    setCredits(credits);
  };

  useEffect(() => {
    return loadData(personId);
  }, [personId]);

  return (
    <GS.PageContainer>
      <C.PersonDetails person={person} />
      <C.PersonCredits credits={credits} />
    </GS.PageContainer>
  );
};

export default PersonInternalPage;
