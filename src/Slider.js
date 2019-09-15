import React from "react"

export default function Slider({ min, max, value, label, suffix, isDecimal }) {
  const replaceDot =
    value
      .toString()
      .replace(".", ",")
      .replace(" ", "") + 0
  return (
    <div>
      <span>{`${label}: ${isDecimal ? replaceDot : value}${suffix} `}</span>
      <input type="range" min={min} max={max} value={value}></input>
    </div>
  )
}
