import Header from './Header'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
// don't forget to import userEvent eventually

describe("<Header/>", ()=> {
    test("header renders without errors", ()=> {
        render (
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
        )
        const element = screen.getByText("Find your purrfect match here")
        expect(element).toBeInTheDocument()
    })
})