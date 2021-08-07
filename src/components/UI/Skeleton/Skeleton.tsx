import React, { useEffect, useState } from 'react'
import SkeletonMaterialUI from '@material-ui/lab/Skeleton'
import * as UTIL from 'utils'

enum Variants {
  'text' = 'text',
  'circle' = 'circle',
  'rect' = 'rect',
}

enum Animations {
  'pulse' = 'pulse',
  'wave' = 'wave',
}

type SkeletonProps = {
  variant?: Variants
  animation?: Animations
  width?: string
  height?: string
  count?: number
  SkeletonStyle?: React.ElementType
  className?: string
}

const Skeleton = ({
  variant,
  animation,
  width,
  height,
  count = 1,
  SkeletonStyle,
  className = '',
}: SkeletonProps) => {
  const [skeletons, setSkeletons] = useState<number[]>([])

  useEffect(() => {
    if (Number.isInteger(count)) {
      setSkeletons([...UTIL.Common.createArrayOfGivenNumber(count)])
    }
  }, [count])

  return skeletons?.map((index) =>
    SkeletonStyle ? (
      <SkeletonStyle className="skeleton-style" key={`skeleton-style-${index}`}>
        <SkeletonMaterialUI
          className={`skeleton-ui-material ${className}`}
          variant={variant}
          animation={animation}
          width={width}
          height={height}
        />
      </SkeletonStyle>
    ) : (
      <SkeletonMaterialUI
        className={className}
        variant={variant}
        animation={animation}
        width={width}
        height={height}
        key={`skeleton-material-${index}`}
      />
    )
  )
}

export default Skeleton
