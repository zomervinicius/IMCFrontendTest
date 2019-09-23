import React from "react"

export default function ImcResult({ imcValue }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <span style={{ textAlign: "left" }}>IMC: {imcValue}</span>
    </div>
  )
}
