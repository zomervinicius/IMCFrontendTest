import React from "react"
import ReactDOM from "react-dom"
import ImcCalculator from "./ImcCalculator"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ImcCalculator />, div)
  ReactDOM.unmountComponentAtNode(div)
})
