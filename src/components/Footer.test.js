import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
// don't forget to import userEvent eventually
import userEvent from '@testing-library/user-event'

describe("<Footer/>", ()=> {
    test("footer renders without errors", ()=> {
        render (
            <BrowserRouter>
            <Footer/>
            </BrowserRouter>
        )
        const element = screen.getByText("Buy Organic CatNip")
        expect(screen.getByRole('link')).toHaveAttribute('href', 'https://mountainroseherbs.com/catnip');
        
    })
})

