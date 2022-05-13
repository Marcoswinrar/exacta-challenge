import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Form from ".."

describe("Componente <Form/>", () => {

  beforeEach(() => {
    render(
      <Form>
        <button type="submit">Enviar</button>
      </Form>
    )
  })

  it("Deve renderizar o formulário sem problemas", () => {
    expect(screen.getByText(/Enviar/)).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  describe("Form com campos inválidos", () => {

    it("Deve renderizar mensagem de erro para Nome invalido ou vazio", async () => {
      const botao = screen.getByRole("button")

      await act(async () => {
        fireEvent.submit(botao)
      })

      expect(screen.queryByText(/Nome é Obrigatório/i)).toBeInTheDocument()
      expect(screen.queryByText(/Nome Inválido/i)).toBeInTheDocument()
    })

    it("Deve renderizar mensagem de erro para Formato de RG inválido", async () => {
      const botao = screen.getByRole("button")

      await act(async () => {
        fireEvent.submit(botao)
      })

      expect(screen.queryByText(/Formato de RG Inválido/i)).toBeInTheDocument()
    })

    it("Deve renderizar mensagem de erro para Data inválida", async () => {

      const botao = screen.getByRole("button")

      await act(async () => {
        fireEvent.submit(botao)
      })

      expect(screen.queryByText(/Formato de Data inválido/i)).toBeInTheDocument()
    })

    it("Deve renderizar mensagem de erro para Orgão Emissor Vazio", async () => {

      const botao = screen.getByRole("button")

      await act(async () => {
        fireEvent.submit(botao)
      })

      expect(screen.queryByText(/Orgão Emissor é Obrigatório/i)).toBeInTheDocument()
    })

    it("Deve renderizar mensagem de erro para Gênero não selecionado", async () => {

      const botao = screen.getByRole("button")

      await act(async () => {
        fireEvent.submit(botao)
      })

      expect(screen.queryByText(/Gênero é Obrigatório/i)).toBeInTheDocument()
    })
  })

  describe("Form com campos válidos", () => {

    it("Deve enviar formulário caso todos os campos estejam preenchidos", async () => {

      cleanup()

      const onSubmit = jest.fn()

      const initialValues = {
        Nome: "Marcos",
        NumeroRg: "12.345.678-9",
        DataEmissao: "20/12/2013",
        OrgaoEmissor: "SSP",
        Genero: "M"
      }

      render(
        <Form onSubmit={onSubmit} initialValues={initialValues}>
          <button>Enviar</button>
        </Form>
      )

      const botao = screen.getByRole("button")

      await act(async () => {
        fireEvent.submit(botao)
      })

      /**
       * React hook form só chama a função de enviar
       * caso o form esteja válido
       */
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })

  })

  describe("Testes de change em componentes controlados", () => {

    it("Campo Numero do RG", async () => {
      const numeroRg = screen.getByLabelText("Numero do RG:")

      await act(async () => {
        fireEvent.change(numeroRg, { target: { value: "12.345.678-1" } })
        fireEvent.submit(screen.getByRole("button"))
      })

      /**
       * Ao preencher corretamente o campo, a mensagem
       * de validação não pode aparecer
       */
      expect(screen.queryByText(/Formato de RG Inválido/i)).toBeNull()
    })

    it("Campo Data de Emissao", async () => {
      const dataEmissao = screen.getByLabelText("Data Emissão:")

      await act(async () => {
        fireEvent.change(dataEmissao, { target: { value: "20/12/2013" } })
        fireEvent.submit(screen.getByRole("button"))
      })

      /**
       * Ao preencher corretamente o campo, a mensagem
       * de validação não pode aparecer
       */
      expect(screen.queryByText(/Formato de Data inválido/i)).toBeNull()
    })

  })
})