import React from "react"
import Slider from "./Slider"

export default function ImcCalculator() {
  return (
    <div>
      <Slider min={40} max={180} value={60} label={"Peso"} suffix={"kg"} />
      <Slider
        min={1.5}
        max={2.0}
        value={1.6}
        label={"Altura"}
        suffix={"m"}
        isDecimal
      />
      <span>IMC: </span>
    </div>
  )
}
