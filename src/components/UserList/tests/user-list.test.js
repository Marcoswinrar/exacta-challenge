import { render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import UserList from ".."
import { UsersProvider } from "../../../contexts/userContext"
import Fetch from '../../../utils/fetch'

describe("Componente <UserList/>", () => {

  const renderComponente = () => render(
    <UserList />, { wrapper: UsersProvider }
  )

  it("Deve renderizar sem usuários", async () => {

    jest.spyOn(Fetch, "get")
      .mockImplementation(() => Promise.reject({ response: "404 Not found" }))

    await act(async () => {
      renderComponente()
    })

    expect(screen.queryByText(/Não há usuários cadastrados!/i)).toBeInTheDocument()
  })

  it("Deve renderizar com usuário", async() => {

    const data = [{
      id: "1",
      Nome: "Marcos",
      NumeroRg: "12.345.678-1",
      DataEmissao: "20/12/2013",
      OrgaoEmissor: "SSP",
      Genero: "M"
    }]

    jest.spyOn(Fetch, "get")
      .mockImplementation(() => Promise.resolve({ data }))

    
    await act(async () => {
      renderComponente()
    })

    expect(screen.getByTitle(/Nome do usuário/i)).toBeInTheDocument()
    expect(screen.queryByText(/Marcos/i)).toBeInTheDocument()
    expect(screen.queryByText(/Masculino/i)).toBeInTheDocument()
  })

})