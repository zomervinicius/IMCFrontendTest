import React, { useState } from "react"
import ImcForm from "./ImcForm"
import ImcResult from "./ImcResult"

export default function ImcCalculator() {
  const [weight, setWeight] = useState(60)
  const [height, setHeight] = useState(1.6)

  const onWeightChange = e => {
    setWeight(e.target.value)
  }
  const onHeightChange = e => {
    setHeight(e.target.value)
  }

  return (
    <div style={{ width: "320px", margin: "auto" }}>
      <ImcForm
        {...{
          weight,
          onWeightChange,
          height,
          onHeightChange
        }}
      />
      <ImcResult {...{ height, weight }} />
    </div>
  )
}
