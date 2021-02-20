import React from "react";
import PropTypes from "prop-types";
import * as UIDetails from "../UIDetailCards";

const MovieDetails = ({ content }) => {
  return <UIDetails.CardContainer></UIDetails.CardContainer>;
};

MovieDetails.propTypes = {
  content: PropTypes.any,
};

export default MovieDetails;
