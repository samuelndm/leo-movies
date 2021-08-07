import React from 'react'
import TooltipMaterialUI from '@material-ui/core/Tooltip'

enum Placements {
  'bottom-end' = 'bottom-end',
  'bottom-start' = 'bottom-start',
  'bottom' = 'bottom',
  'left-end' = 'left-end',
  'left-start' = 'left-start',
  'left' = 'left',
  'right-end' = 'right-end',
  'right-start' = 'right-start',
  'right' = 'right',
  'top-end' = 'top-end',
  'top-start' = 'top-start',
  'top' = 'top',
}

type ToolTipProps = {
  children: React.ReactElement
  title: string
  placement?: Placements
  hasArrow?: boolean
}

const Tooltip = ({
  children,
  title = '',
  placement,
  hasArrow,
}: ToolTipProps) => {
  return (
    <TooltipMaterialUI title={title} placement={placement} arrow={hasArrow}>
      {children}
    </TooltipMaterialUI>
  )
}

export default Tooltip
