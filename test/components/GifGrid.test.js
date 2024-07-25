import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs');
describe('proves component gifgrid', () => {
    const category = 'one piece';
    test('es mostra el loading incialment', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })
        render(<GifGrid category={category} />)
        expect(screen.getByText('is loading'))
        expect(screen.getByText(category))

    })
    test('es mostren items al finaltizar la carrega', () => {
        const gifs = [{
            id: 'abc',
            title: 'test',
            url: 'https://test.com/gig.gif'
        }, {
            id: 'sdfabc',
            title: 'testwer',
            url: 'https://twerest.com/gig.gif'
        }, {
            id: 'abc2343',
            title: 'tgdfst',
            url: 'https://test234.com/gig.gif'
        }]
        useFetchGifs.mockReturnValue({
            gifs,
            isLoading: true
        })
        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(3);
    })


})