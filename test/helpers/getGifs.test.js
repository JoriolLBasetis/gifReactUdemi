import { getGifs } from "../../src/helpers/getGifs"

describe('test getgifs helper', () => {
    test('ha de tornar un array de gifs', async () => {
        const gifs = await getGifs('one piece');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String)
        })
    })

})