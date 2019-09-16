import React from "react"

export default function Slider({
  min,
  max,
  value,
  label,
  suffix,
  isDecimal,
  onChange,
  step,
  inputStyle,
  divStyle,
  formatValue
}) {
  return (
    <div style={divStyle}>
      <span>{`${label}: ${
        !!formatValue ? formatValue(value) : value
      }${suffix} `}</span>
      <div>
        <input
          type="range"
          style={inputStyle}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          step={step}
        ></input>
      </div>
    </div>
  )
}
