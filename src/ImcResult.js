import React, { useEffect, useState } from "react"

export default function ImcResult({ height, weight }) {
  const imcFormula = weight / (height * height)
  const formattedImcValue = imcFormula
    .toFixed(1)
    .toString()
    .replace(".", ",")
    .replace(" ", "")

  const [imcValue, setImcValue] = useState(formattedImcValue)

  useEffect(() => {
    const calcImc = () => {
      setImcValue(formattedImcValue)
    }
    calcImc()
  }, [height, formattedImcValue, weight])
  return (
    <div style={{ marginTop: "1rem" }}>
      <span style={{ textAlign: "left" }}>IMC: {imcValue}</span>
    </div>
  )
}
