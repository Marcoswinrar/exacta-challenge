import { render, screen } from "@testing-library/react"
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

    it("Deve cadastrar o usuário e apresentar mensagem de sucesso", () => {

      const { container } = render(<RegisterForm />)

      expect(container).toMatchSnapshot()

    })
  })
})