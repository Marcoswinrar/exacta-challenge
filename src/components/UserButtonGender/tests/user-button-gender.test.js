import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import UserButtonGender from ".."

describe("Componente <UserButtonGender>", () => {

  it("Deve renderizar sem problemas", () => {
    const handleClick = jest.fn()
    
    render(<UserButtonGender handleClick={handleClick} />)

    expect(handleClick).toBeCalledTimes(0)
    expect(screen.queryByText("Masculino")).toBeInTheDocument()
    expect(screen.queryByText("Feminino")).toBeInTheDocument()
  })

  it("Deve setar corretamente o valor M caso clicar no botão Masculino", () => {
    const handleClick = jest.fn()

    render(<UserButtonGender handleClick={handleClick} />)

    const buttonMasculino = screen.getByText(/Masculino/)

    act(() => fireEvent.click(buttonMasculino))

    expect(handleClick).toBeCalledTimes(1)
    expect(handleClick).toBeCalledWith("M")

  })

  it("Deve setar corretamente o valor F caso clicar no botão Feminino", () => {
    const handleClick = jest.fn()

    render(<UserButtonGender handleClick={handleClick} />)

    const buttonFeminino = screen.getByText(/Feminino/)

    act(() => fireEvent.click(buttonFeminino))

    expect(handleClick).toBeCalledTimes(1)
    expect(handleClick).toBeCalledWith("F")

  })
})