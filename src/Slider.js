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
  divStyle
}) {
  const replaceDot = parseFloat(value)
    .toFixed(2)
    .toString()
    .replace(".", ",")
    .replace(" ", "")

  return (
    <div style={divStyle}>
      <span>{`${label}: ${isDecimal ? replaceDot : value}${suffix} `}</span>
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
