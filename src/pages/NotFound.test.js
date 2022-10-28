import NotFound from './NotFound'
import { render, screen } from '@testing-library/react'
// don't forget to import userEvent eventually

describe("<NotFound/>", ()=> {
    test("NotFound renders without errors", ()=> {

        render (<NotFound/>)

        const element = screen.getByText("Not Found")
        expect(element).toBeInTheDocument()
    })
})

