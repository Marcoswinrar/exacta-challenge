import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import Navbar from ".."

describe("Componente <Navbar />", () => {

  beforeEach(() => {
    render(
      <Navbar />,
      { wrapper: BrowserRouter }
    )
  })

  it("Deve renderizar o componente sem problemas", () => {

    expect(screen.getByText(/Cadastro/)).toBeInTheDocument()
    expect(screen.getByText(/Usuários/)).toBeInTheDocument()
  })

  it("Deve redirecionar usuário a página de Cadastro ao clicar em Cadastro", () => {
    const link = screen.getByText(/Cadastro/)

    act(() => fireEvent.click(link))

    expect(window.location.pathname).toEqual('/')
  })


  it("Deve redirecionar usuário a página de Usuário(Listagem) ao clicar em Usuários", () => {
    const link = screen.getByText(/Usuários/)

    act(() => fireEvent.click(link))

    expect(window.location.pathname).toEqual('/users')
  })
})