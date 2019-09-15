import React from "react"

export default function Slider({
  min,
  max,
  value,
  label,
  suffix,
  isDecimal,
  onChange,
  step
}) {
  const replaceDot = parseFloat(value)
    .toFixed(2)
    .toString()
    .replace(".", ",")
    .replace(" ", "")

  return (
    <div>
      <span>{`${label}: ${isDecimal ? replaceDot : value}${suffix} `}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        step={step}
      ></input>
    </div>
  )
}
