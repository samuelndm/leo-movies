import React, { useEffect, useState } from "react";
import * as API from "services/Loaders";
import * as S from "./styles";
import * as C from "components";

const PersonInternalPage = ({ match }) => {
  const [personId] = useState(match?.params?.id);
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState([]);

  const loadData = async (personId) => {
    const person = await API.loadPersonById(personId);
    const credits = await API.loadPersonCreditsById(personId);

    const timeOut = setTimeout(() => {
      // Just to make a cool effect with skeleton ^^
      setPerson(person);
      setCredits(credits);
    }, 1000);

    return () => clearTimeout(timeOut);
  };

  useEffect(() => {
    return loadData(personId);
  }, [personId]);

  return (
    <S.Container>
      <C.PersonInfo person={person} />
      <C.PersonCredits credits={credits} />
    </S.Container>
  );
};

export default PersonInternalPage;
