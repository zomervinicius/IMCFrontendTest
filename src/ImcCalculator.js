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
      setImcValue((weight / (height * height)).toFixed(1))
    }
    calcImc()
  }, [height, weight])
  return (
    <div>
      <Slider
        min={40}
        max={180}
        value={weight}
        label={"Peso"}
        step={1}
        suffix={"kg"}
        onChange={onWeightChange}
      />
      <Slider
        min={1.5}
        max={2.0}
        step={0.01}
        value={height}
        label={"Altura"}
        suffix={"m"}
        onChange={onHeightChange}
        isDecimal
      />
      <span>IMC: {imcValue}</span>
    </div>
  )
}
