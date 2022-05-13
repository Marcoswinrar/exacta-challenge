import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Users from '..'

describe("Página <Users />", () => {

  it("Deve renderizar página sem problemas", () => {
    render(<Users />, { wrapper: BrowserRouter })

    expect(screen.queryByText(/Lista de Usuários/i)).toBeInTheDocument()
  })
})