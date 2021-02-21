import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";

const PersonInternalPage = ({ match }) => {
  const [personId] = useState(match?.params?.id);
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState(null);

  const loadData = async (personId) => {
    const person = await API.loadPersonById(personId);
    const credits = await API.loadPersonCreditsById(personId);

    setTimeout(() => {
      // Just to make a cool effect with skeleton ^^
      setPerson(person);
      setCredits(credits);
    }, 1000);
  };

  useEffect(() => {
    return loadData(personId);
  }, [personId]);

  return (
    <GS.PageContainer>
      <C.PersonInfo person={person} />
      <C.PersonCredits credits={credits} />
    </GS.PageContainer>
  );
};

export default PersonInternalPage;
