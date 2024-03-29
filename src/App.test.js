import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

describe("App", () => {
  it("Deve renderizar o App sem problemas", () => {
    render(<App/>, {wrapper: BrowserRouter})

    expect(screen.queryByText(/exactaworks/)).toBeInTheDocument()
  })
})