import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas hook', () => {
    test('estat incial', () => {
        const { result } = renderHook(() => useFetchGifs('one piece'));
        const { gifs, isLoading } = result.current;
        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })
    test('array d\'imatges i loading a false', async () => {
        const { result } = renderHook(() => useFetchGifs('one piece'));
        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0));
        const { gifs, isLoading } = result.current;
        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
})