import React from "react";
import PropTypes from "prop-types";
import TooltipUIMaterial from "@material-ui/core/Tooltip";

const Tooltip = ({ children, title = "", placement, hasArrow }) => {
  return (
    <TooltipUIMaterial title={title} placement={placement} arrow={hasArrow}>
      {children}
    </TooltipUIMaterial>
  );
};

Tooltip.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
  placement: PropTypes.string,
  hasArrow: PropTypes.bool,
};

export default Tooltip;
