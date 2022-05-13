import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import UserModal from ".."
import { UsersProvider } from "../../../contexts/userContext"
import Fetch from '../../../utils/fetch'

describe("Component <UserModal />", () => {

  const renderComponent = (initialValues) => render(
    <UserModal initialValues={initialValues} />,
    { wrapper: UsersProvider }
  )

  it("Deve renderizar Modal sem problemas", () => {
    renderComponent({})

    expect(screen.queryByText(/Edição de Usuário/i)).toBeInTheDocument()
  })

  describe("Ações do usuário", () => {
    it("Deve editar ao clicar no submit do Form", async () => {

      renderComponent({
        id: "1",
        Nome: "Marcos",
        NumeroRg: "12.345.678-1",
        DataEmissao: "20/12/2013",
        OrgaoEmissor: "SSP",
        Genero: "M"
      })

      jest.spyOn(Fetch, "put")
        .mockImplementation(() => Promise.resolve({}))

      const editButton = screen.queryByText(/Editar/i)

      await act(async () => {
        fireEvent.submit(editButton)
      })

      await waitFor(() => {
        expect(screen.queryByText(/Usuário atualizado com sucesso!/i)).toBeInTheDocument()
      })
    })

    it("Deve falhar ao editar e exibir mensagem de erro", async () => {
      renderComponent({
        id: "1",
        Nome: "Marcos",
        NumeroRg: "12.345.678-1",
        DataEmissao: "20/12/2013",
        OrgaoEmissor: "SSP",
        Genero: "M"
      })

      jest.spyOn(Fetch, "put")
        .mockImplementation(() => Promise.reject({ response: "404 Not found" }))

      const editButton = screen.queryByText(/Editar/i)

      await act(async () => {
        fireEvent.submit(editButton)
      })

      await waitFor(() => {
        expect(screen.queryByText(/Erro ao atualizar usuário!/i)).toBeInTheDocument()
      })

    })

    it("Deve fechar o modal ao clicar no botão de cancelar", async () => {
      renderComponent({
        Nome: "Marcos"
      })

      fireEvent.click(screen.queryByText(/Cancelar/i))

      await waitFor(() => {
        expect(screen.queryByText(/Marcos/i)).toBeNull()
      })
    })

    it("Deve fechar o modal ao clicar no 'X' do modal", async () => {
      renderComponent({
        Nome: "Marcos"
      })

      fireEvent.click(screen.getByTitle(/Fechar/i))

      await waitFor(() => {
        expect(screen.queryByText(/Marcos/i)).toBeNull()
      })
    })
  })
})