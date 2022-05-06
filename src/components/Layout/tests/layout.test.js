import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Layout from ".."

describe("Componente <Layout/>", () => {

  const renderComponent = () => render(
    <Layout>
      <div>Children component</div>
    </Layout>,
    { wrapper: BrowserRouter }
  )

  it("Deve renderizar o componente sem problemas", () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it("Deve renderizar o children passado no layout", () => {
    renderComponent()
    expect(screen.getByText(/Children component/)).toBeInTheDocument()
  })
})