import React from "react"
import Slider from "./Slider"

export default function ImcForm({
  weight,
  onWeightChange,
  height,
  replaceDotForComma,
  onHeightChange
}) {
  return (
    <div>
      <Slider
        min={40}
        max={180}
        value={weight}
        inputStyle={{ width: "100%", marginTop: "0.7rem" }}
        label={"Peso"}
        divStyle={{ marginTop: "1rem" }}
        step={1}
        suffix={"kg"}
        onChange={onWeightChange}
      />
      <Slider
        min={1.5}
        max={2.0}
        divStyle={{ marginTop: "1rem" }}
        step={0.01}
        value={height}
        inputStyle={{ width: "100%", marginTop: "0.7rem" }}
        formatValue={replaceDotForComma}
        label={"Altura"}
        suffix={"m"}
        onChange={onHeightChange}
      />
    </div>
  )
}
