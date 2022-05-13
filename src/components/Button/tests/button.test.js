import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Button from ".."

describe("Componente <Button />", () => {
  
  it("Deve renderizar o button sem problemas", () => {
    const {container} = render(<Button value="Botão" />)

    expect(container).toMatchSnapshot()
    expect(screen.queryByText(/Botão/)).toBeInTheDocument()
  })

  it("Deve renderizar o botão com o tamanho que for passado", () => {
    render(<Button width={"145px"}/>)

    const botao = screen.getByRole("button")

    expect(botao).toHaveStyle({
      "width": "145px"
    })
  })

  it("Deve chamar função de click ao clicar no botão", () => {
    const onClick = jest.fn()

    render(<Button value="Botão" onClick={onClick}/>)

    const botao = screen.queryByText(/Botão/)

    act(() => fireEvent.click(botao))

    expect(onClick).toBeCalledTimes(1)

  })
})