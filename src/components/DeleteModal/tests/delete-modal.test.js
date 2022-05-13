import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import DeleteModal from ".."
import { UsersProvider } from "../../../contexts/userContext"
import Fetch from '../../../utils/fetch'

describe("Componente <DeleteModal />", () => {

  const onClose = jest.fn()

  const user = {
    id: '1',
    Nome: "Marcos"
  }

  beforeAll(() => {
    jest.spyOn(Fetch, "delete")
      .mockImplementation(() => Promise.resolve({}))
  })

  beforeEach(() => {
    render(
      <DeleteModal
        user={user}
        onClose={onClose}
      />,
      { wrapper: UsersProvider })
  })


  it("Deve renderizar o Modal sem problemas", () => {
    expect(screen.queryByText(/Excluir Usuário/)).toBeInTheDocument()
    expect(screen.queryByText(/Tem certeza que deseja excluir esse registro?/)).toBeInTheDocument()
  })

  it("Deve excluir usuário ao confirmar e apresentar mensagem de sucesso", async () => {
    const botao = screen.queryByText(/Confirmar/i)

    fireEvent.click(botao)

    await waitFor(() => {
      expect(screen.queryByText(/Usuário excluído com sucesso!/i)).toBeInTheDocument()
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })

  it("Deve apresentar mensagem de erro ao excluír o usuário", async () => {

    jest.spyOn(Fetch, "delete")
      .mockImplementation(() => Promise.reject({ response: "404 Not found" }))

    const botao = screen.queryByText(/Confirmar/i)

    fireEvent.click(botao)

    await waitFor(() => {
      expect(screen.queryByText(/Houve um problema ao excluír!/i)).toBeInTheDocument()
      expect(onClose).toHaveBeenCalledTimes(1)
    })

  })

})