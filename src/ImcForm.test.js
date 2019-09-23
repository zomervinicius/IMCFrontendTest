import React from "react"
import ReactDOM from "react-dom"
import ImcForm from "./ImcForm"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ImcForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})
