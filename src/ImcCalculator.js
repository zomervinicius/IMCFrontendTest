import React, { useEffect, useState } from "react"
import ImcForm from "./ImcForm"
import ImcResult from "./ImcResult"

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
      <ImcForm
        {...{
          weight,
          onWeightChange,
          height,
          replaceDotForComma,
          onHeightChange
        }}
      />
      <ImcResult {...{ imcValue }} />
    </div>
  )
}
