import React, { useEffect, useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "../../../assets/images/placeholder.jpg";
import * as S from "./styles";

const Preview = ({ preview }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (preview) {
      setTimeout(() => {
        setImageUrl(
          preview.poster_path
            ? `${process.env.REACT_APP_API_IMAGES}${preview.poster_path}`
            : placeholder
        );
      }, [1000]);
    }
  }, [preview]);

  return (
    <S.Container>
      {imageUrl ? (
        <S.Image src={imageUrl} alt='content poster' />
      ) : (
        <Skeleton className='body' variant='rect' animation='wave' />
      )}
    </S.Container>
  );
};

export default Preview;
