import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import GenderGroup from ".."

describe("Componente <UserButtonGender>", () => {

  it("Deve conter as opções de Masculino e Feminino ao renderizar", () => {
    const handleClick = jest.fn()
    
    render(<GenderGroup handleClick={handleClick} />)

    expect(handleClick).toBeCalledTimes(0)
    expect(screen.queryByText("Masculino")).toBeInTheDocument()
    expect(screen.queryByText("Feminino")).toBeInTheDocument()
  })

  it("Deve renderizar com o valor padrão como Masculino", () => {
    const handleClick = jest.fn()

    render(<GenderGroup handleClick={handleClick} />)

    const buttonMasculino = screen.getByLabelText(/Masculino/)

    expect(buttonMasculino.checked).toBeTruthy()
    expect(buttonMasculino.value).toEqual("M")
  })

  it("Deve selecionar corretamente o valor F caso clicar no botão Feminino", () => {
    const handleClick = jest.fn()

    render(<GenderGroup handleClick={handleClick} />)

    const buttonFeminino = screen.getByText(/Feminino/)

    act(() => fireEvent.click(buttonFeminino))

    expect(handleClick).toBeCalledTimes(1)
    expect(handleClick).toBeCalledWith("F")

  })
})