/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import CustomSelect from 'react-select'
import * as S from './styles'

type SelectProps = {
  options?: any[]
  defaultValue?: any
  label?: string
  placeholder?: string
  onChange: (value: any) => void
  isSearchable?: boolean
  isClearable?: boolean
  containerStyle?: any
  labelStyle?: any
}

const Select = ({
  options = [],
  defaultValue,
  label,
  placeholder,
  onChange,
  isSearchable = false,
  isClearable,
  containerStyle,
  labelStyle,
}: SelectProps) => {
  const [customOptions, setCustomOptions] = useState<any[]>([])

  const handleOptionsType = (options: any) => {
    const firstElement = options?.[0]
    const firstElementType = typeof firstElement
    let newOptions: any[] = []

    if (firstElement && firstElementType === 'object') {
      newOptions = options
    } else if (['number', 'string'].includes(firstElementType)) {
      newOptions = options.map((option: any) => {
        return {
          value: option,
          label: option,
        }
      })
    }

    setCustomOptions(newOptions)
  }

  useEffect(() => {
    handleOptionsType(options)
  }, [options])

  return (
    <S.Container style={containerStyle}>
      <S.Label style={labelStyle}>{label || ''}</S.Label>

      <CustomSelect
        options={customOptions}
        defaultValue={options.find(
          (option: any) =>
            option?.value || option === defaultValue?.value || defaultValue
        )}
        placeholder={placeholder || ''}
        isDisabled={!customOptions?.length}
        isClearable={isClearable}
        isSearchable={isSearchable}
        onChange={(e) => onChange(e?.value || '')}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </S.Container>
  )
}

export default Select
