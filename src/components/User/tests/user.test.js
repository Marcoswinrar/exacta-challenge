import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import User from ".."
import { UsersProvider } from "../../../contexts/userContext"


describe("Componente <User/>", () => {

  const user = {
    id: "1",
    Nome: "Marcos",
    NumeroRg: "12.345.678-1",
    DataEmissao: "20/12/2013",
    OrgaoEmissor: "SSP",
    Genero: "M"
  }

  const renderComponent = (user) => render(
    <User
      user={user}
      index={0}
    />
    , { wrapper: UsersProvider })

  it("Deve renderizar usuário passado no componente", () => {
    renderComponent(user)

    expect(screen.queryByText(/Marcos/i)).toBeInTheDocument()
    expect(screen.queryByText(/12.345.678-1/i)).toBeInTheDocument()
    expect(screen.queryByText("20/12/2013")).toBeInTheDocument()
    expect(screen.queryByText(/SSP/i)).toBeInTheDocument()
    expect(screen.queryByText(/Masculino/i)).toBeInTheDocument()
  })

  it("Deve renderizar o usuário do sexo Masculino e apresentar Icone de Gênero correto", () => {
    renderComponent(user)

    expect(screen.getByTitle("Masculino")).toBeInTheDocument()

  })

  it("Deve renderizar o usuário do sexo Feminino e apresentar Icone de Gênero correto", () => {

    const femaleUser = {
      ...user,
      Genero: "F"
    }

    renderComponent(femaleUser)

    expect(screen.getByTitle("Feminino")).toBeInTheDocument()

  })

  describe("Ações do usuário", () => {

    it("Deve abrir o modal do usuário para editar ao clique do icone de editar", async () => {

      renderComponent(user)

      const editIcon = screen.getByTitle(/Editar Usuário/i)

      fireEvent.click(editIcon)

      /**
       * Na tela de usuário quando ele clicar no botão de 
       * Editar deve estar disponivel a modal de edição.
       */
      await waitFor(() => {
        expect(screen.queryByText(/Edição de Usuário/i)).toBeInTheDocument()
      })
    })

    it("Deve abrir o modal de exclusão ao clicar no icone de exclusão", async () => {

      renderComponent(user)

      const deleteIcon = screen.getByTitle(/Deletar Usuário/i)

      fireEvent.click(deleteIcon)

      await waitFor(() => {
        expect(screen.queryByText(/Excluir Usuário/i)).toBeInTheDocument()
        expect(screen.queryByText(/Tem certeza que deseja excluir esse registro?/i)).toBeInTheDocument()
      })

      //Fecha a modal de exclusão
      const closeModal = screen.queryByText(/Cancelar/)
      fireEvent.click(closeModal)
    })
  })

})