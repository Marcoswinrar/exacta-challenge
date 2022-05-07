import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Input from ".."

describe("Componente <Input />", () => {

  it("Deve renderizar o componente sem problemas", () => {
    const { container } = render(
      <Input
        label="Input"
        type="text"
        value="Teste"
        hasSeparator
      />
    )

    expect(container).toMatchSnapshot()
    expect(screen.queryByText(/Input/)).toBeInTheDocument()
  })

  it("Deve renderizar o Input com máscara caso seja passado ao componente", () => {
    render(
      <Input
        label="Input"
        type="text"
        value="Teste"
        mask="123456-0"
      />
    )

    expect(screen.getByDisplayValue(/123456-0/)).toBeInTheDocument()
  })

  it("Deve chamar o onChange e  conter o valor correto ao digitar no campo de Input", () => {
    const onChange = jest.fn()

    render(
      <Input
        label="Input"
        type="text"
        onChange={onChange}
      />
    )

    const input = screen.getByLabelText(/Input/)

    act(() => fireEvent.change(input, { target: { value: 'Teste1234560' } }))

    expect(onChange).toBeCalledTimes(1)
    expect(screen.getByDisplayValue(/Teste1234560/)).toBeInTheDocument()

  })
})