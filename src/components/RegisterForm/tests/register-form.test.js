import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RegisterForm from ".."
import { UsersProvider } from "../../../contexts/userContext"
import Fetch from "../../../utils/fetch"

describe("Componente <RegisterForm/>", () => {

  beforeAll(() => {
    jest.spyOn(Fetch, "post")
      .mockImplementation(() => Promise.resolve({}))
  })

  beforeEach(() => {
    render(
      <RegisterForm />
      , { wrapper: UsersProvider }
    )
  })

  it("Deve renderizar o Cadastro sem problemas", () => {

    expect(screen.queryByText(/Cadastrar/)).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveStyle({
      "width": "200px"
    })
  })

  describe("Teste de envio de cadastro", () => {

    it("Deve cadastrar o usuário e apresentar mensagem de sucesso", async () => {

      const nome = screen.getByLabelText("Nome:")
      const numeroRg = screen.getByLabelText("Numero do RG:")
      const dataEmissao = screen.getByLabelText("Data Emissão:")
      const orgaoEmissor = screen.getByLabelText("Orgão Emissor:")
      const genero = screen.getByLabelText("Gênero:")

      const botao = screen.getByRole("button")

      await act(async () => {
        fireEvent.change(nome, { target: { value: "Marcos" } })
        fireEvent.change(numeroRg, { target: { value: "12.345.678-9" } })
        fireEvent.change(dataEmissao, { target: { value: "20/12/2013" } })
        fireEvent.change(orgaoEmissor, { target: { value: "SSP" } })
        fireEvent.change(genero, { target: { value: "M" } })

        fireEvent.submit(botao)
      })

      await waitFor(() => {
        expect(screen.queryByText(/Usuário criado com sucesso!/i)).toBeInTheDocument()
      })

    })

    it("Deve falhar ao cadastrar e apresentar mensagem de erro", async () => {

      jest.spyOn(Fetch, "post")
        .mockImplementation(() => Promise.reject({ response: "404 Not found" }))

      const nome = screen.getByLabelText("Nome:")
      const numeroRg = screen.getByLabelText("Numero do RG:")
      const dataEmissao = screen.getByLabelText("Data Emissão:")
      const orgaoEmissor = screen.getByLabelText("Orgão Emissor:")
      const genero = screen.getByLabelText("Gênero:")

      const botao = screen.getByRole("button")

      await act(async () => {
        fireEvent.change(nome, { target: { value: "Marcos" } })
        fireEvent.change(numeroRg, { target: { value: "12.345.678-9" } })
        fireEvent.change(dataEmissao, { target: { value: "20/12/2013" } })
        fireEvent.change(orgaoEmissor, { target: { value: "SSP" } })
        fireEvent.change(genero, { target: { value: "M" } })

        fireEvent.submit(botao)
      })

      await waitFor(() => {
        expect(screen.queryByText(/Houve um erro ao cadastrar!/i)).toBeInTheDocument()
      })

    })
  })
})