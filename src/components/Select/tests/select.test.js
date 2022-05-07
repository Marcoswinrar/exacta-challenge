import { render, screen } from "@testing-library/react"
import Select from ".."

describe("Componente <Select/>", () => {

  it("Deve renderizar o componente sem problemas", () => {
    render(<Select label={"Select"} />)

    expect(screen.queryByText(/Select/))
  })
})