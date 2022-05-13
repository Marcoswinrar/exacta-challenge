import { render, screen } from "@testing-library/react"
import Error from ".."

describe("Componente <Error />", () => {

  it("Deve renderizar o component de erro sem problemas", () => {
    const {container} = render(<Error />)

    expect(container).toMatchSnapshot()
  })

  it("Deve mostrar a mensagem de erro passado ao componente", () => {
    render(<Error message={"Erro ao cadastrar o usuário"}/>)

    expect(screen.queryByText(/Erro ao cadastrar o usuário/i)).toBeInTheDocument()
  })
})