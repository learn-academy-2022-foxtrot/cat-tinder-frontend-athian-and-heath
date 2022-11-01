import { render, screen } from '@testing-library/react'
import CatShow from './CatIndex'
import mockCats from "../mockData"
import { BrowserRouter } from "react-router-dom"

describe("<CatShow/>", () => {
    test("CatShow renders without errors", () => {

        render(
            <BrowserRouter>
                <CatShow cats={mockCats} />
            </BrowserRouter>

        )
        mockCats.forEach((cat) => {
            const catName = screen.getByText(cat.name)
            expect(catName).toBeInTheDocument()
        })

    })
})

