import React from "react"
import ReactDOM from "react-dom"
import ImcResult from "./ImcResult"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ImcResult />, div)
  console.log(div)
  ReactDOM.unmountComponentAtNode(div)
})
