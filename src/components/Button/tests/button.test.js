import { render, screen } from "@testing-library/react"
import Button from ".."

describe("Componente <Button />", () => {
  
  it("Deve renderizar o omponente sem problemas", () => {
    const {container} = render(<Button value="Botão" width={"150px"} />)

    expect(container).toMatchSnapshot()
    expect(screen.queryByText(/Botão/)).toBeInTheDocument()
  })
})