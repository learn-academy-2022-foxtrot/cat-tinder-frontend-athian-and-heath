import { render, screen } from '@testing-library/react'
import CatIndex from './CatIndex'
import mockCats from "../mockData"
import { BrowserRouter } from "react-router-dom"

describe("<CatIndex/>", () => {
    test("CatIndex renders without errors", () => {

        render(
            <BrowserRouter>
                <CatIndex cats={mockCats} />
            </BrowserRouter>

        )
        mockCats.forEach((cat) => {
            const catName = screen.getByText(cat.name)
            expect(catName).toBeInTheDocument()
        })

    })
})

