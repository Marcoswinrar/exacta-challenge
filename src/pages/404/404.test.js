import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFoundPage from '.'

describe("Página 404 Not Found", () => {

  it("Deve renderizar página sem problemas", () => {
    render(<NotFoundPage />, { wrapper: BrowserRouter })

    expect(screen.queryByText(/404: Not Found/i)).toBeInTheDocument()
    expect(screen.queryByText(/Você acessou uma rota que não existe.../)).toBeInTheDocument()
    
  })
})