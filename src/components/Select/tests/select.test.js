import { render, screen, fireEvent } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Select from ".."

describe("Componente <Select/>", () => {

  it("Deve renderizar o componente sem problemas", () => {
    const { container } = render(<Select label={"Select"} />)

    expect(screen.queryByText(/Select/))
    expect(container).toMatchSnapshot()
  })

  it("Deve chamar onChange e selecionar valor correto ao clicar", () => {
    const onChange = jest.fn()

    const data = [
      { label: "Teste 01", value: "01" },
      { label: "Teste 02", value: "02" }
    ]

    render(
      <Select
        label={"Select"}
        data={data}
        onChange={onChange}
      />
    )

    const select = screen.getByLabelText(/Select/)

    act(() => fireEvent.change(select, { target: { value: "2" } }))

    expect(onChange).toBeCalledTimes(1)
    expect(screen.queryByText(/Teste 02/)).toBeInTheDocument()
  })
})