import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('test AddCategory', () => {
    const value = 'luffy';
    
    test('canviar caixa de text', () => {
        render(<AddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: value } });
        expect(input.value).toBe(value);
    })
    test('test crida onnewcategory si el input te un valor', () => {
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: value } });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(value);
    })
    test('test no crida onnewcategory si el input te un valor inferior <= a 1', () => {
        const onNewCategory = jest.fn()
        const valueCurt = 'a';
        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
        expect(input.value).toBe('');        
        fireEvent.input(input, { target: { value: valueCurt } });
        fireEvent.submit(form);
        expect(input.value).toBe(valueCurt);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    })
})