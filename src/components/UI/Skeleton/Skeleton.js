import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SkeletonUIMaterial from "@material-ui/lab/Skeleton";
import * as UTIL from "utils";
import "./styles.css";

const Skeleton = ({
  variant,
  animation,
  width,
  height,
  count = 1,
  SkeletonStyle,
  className = "",
}) => {
  const [skeletons, setSkeletons] = useState([]);

  useEffect(() => {
    if (Number.isInteger(count)) {
      setSkeletons([...UTIL.createArrayOfGivenNumber(count)]);
    }
  }, [count]);

  return skeletons?.map((index) =>
    SkeletonStyle ? (
      <SkeletonStyle className='skeleton-style' key={`skeleton-style-${index}`}>
        <SkeletonUIMaterial
          className={`skeleton-ui-material ${className}`}
          variant={variant}
          animation={animation}
          width={width}
          height={height}
        />
      </SkeletonStyle>
    ) : (
      <SkeletonUIMaterial
        className={className}
        variant={variant}
        animation={animation}
        width={width}
        height={height}
        key={`skeleton-material-${index}`}
      />
    )
  );
};

Skeleton.propTypes = {
  variant: PropTypes.oneOf(["text", "circle", "rect"]),
  animation: PropTypes.oneOf(["pulse", "wave", false]),
  SkeletonStyle: PropTypes.object,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  count: PropTypes.number,
};

export default Skeleton;
