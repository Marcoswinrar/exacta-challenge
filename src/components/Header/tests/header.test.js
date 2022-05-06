import { render, screen } from "@testing-library/react"
import Header from ".."

describe("Componente <Header />", () => {
  it("Deve renderizar o componente sem problemas", () => {
    render(<Header />)

    expect(screen.queryByText(/Exactaworks/i)).toBeInTheDocument()
    expect(screen.queryByText(/Cadastro de usuários/i)).toBeInTheDocument()
  })

})