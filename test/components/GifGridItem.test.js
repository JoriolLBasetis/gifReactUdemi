import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components"

describe('GridItem tests', () => {
    const testUrl = 'https://test.com/gim.gif';
    const testTitle = 'title';

    test('snapshot match', () => {
        const { container } = render(<GifGridItem url={testUrl} title={testTitle} />);
        expect(container).toMatchSnapshot();
    })
    test('mostra imatge amb la url',()=>{
        render(<GifGridItem url={testUrl} title={testTitle} />);
        const {src, alt}= screen.getByRole('img');
        expect(src).toBe(testUrl);
        expect(alt).toBe(testTitle);
    })
    test('show title in component', ()=>{
        render(<GifGridItem url={testUrl} title={testTitle} />);
        expect(screen.getByRole('paragraph').innerHTML).toBe(testTitle);
    })
})