import Home from './Home'
import { render, screen } from '@testing-library/react'
// don't forget to import userEvent eventually

describe("<Home/>", ()=> {
    test("home renders without errors", ()=> {

        render (<Home/>)

        const element = screen.getByText("Welcome, y'all (y'all means all)")
        expect(element).toBeInTheDocument()
    })
})