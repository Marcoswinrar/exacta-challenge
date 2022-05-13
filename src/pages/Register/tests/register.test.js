import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Register from ".."

describe("Página <Register />", () => {

  it("Deve renderizar página sem problemas", () => {
    render(<Register />, { wrapper: BrowserRouter })

    expect(screen.queryByText(/Dados pessoais/i)).toBeInTheDocument()
  })

})