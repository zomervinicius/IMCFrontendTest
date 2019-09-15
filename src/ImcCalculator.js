import React, { useEffect, useState } from "react"
import Slider from "./Slider"

export default function ImcCalculator() {
  const [weight, setWeight] = useState(60)
  const [height, setHeight] = useState(1.6)
  const [imcValue, setImcValue] = useState(0)
  const onWeightChange = e => {
    setWeight(e.target.value)
  }
  const onHeightChange = e => {
    setHeight(e.target.value)
  }
  useEffect(() => {
    const calcImc = () => {
      setImcValue(
        (weight / (height * height))
          .toFixed(1)
          .toString()
          .replace(".", ",")
          .replace(" ", "")
      )
    }
    calcImc()
  }, [height, weight])
  return (
    <div style={{ textAlign: "center" }}>
      <Slider
        min={40}
        max={180}
        value={weight}
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
        inputStyle={{ width: "200px" }}
        label={"Altura"}
        suffix={"m"}
        onChange={onHeightChange}
        isDecimal
      />
      <div style={{ marginTop: "1rem" }}>
        <span style={{ textAlign: "left" }}>IMC: {imcValue}</span>
      </div>
    </div>
  )
}
