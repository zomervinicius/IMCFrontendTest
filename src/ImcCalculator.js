import React, { useEffect, useState } from "react"
import Slider from "./Slider"

export default function ImcCalculator() {
  const [weight, setWeight] = useState(60)
  const [height, setHeight] = useState(1.6)
  const imcFormula = weight / (height * height)
  const formattedImcValue = imcFormula
    .toFixed(1)
    .toString()
    .replace(".", ",")
    .replace(" ", "")

  const [imcValue, setImcValue] = useState(formattedImcValue)
  const onWeightChange = e => {
    setWeight(e.target.value)
  }
  const onHeightChange = e => {
    setHeight(e.target.value)
  }
  useEffect(() => {
    const calcImc = () => {
      setImcValue(formattedImcValue)
    }
    calcImc()
  }, [height, formattedImcValue, weight])
  const replaceDotForComma = value => {
    return parseFloat(value)
      .toFixed(2)
      .toString()
      .replace(".", ",")
      .replace(" ", "")
  }
  return (
    <div style={{ width: "320px", margin: "auto" }}>
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
      <div style={{ marginTop: "1rem" }}>
        <span style={{ textAlign: "left" }}>IMC: {imcValue}</span>
      </div>
    </div>
  )
}
