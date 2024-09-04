import { expect } from "@playwright/test"
import { fixtures as test } from "../utils/fixture"
import { apiUrl } from "../../consts/scanConst";


test.describe('Api test', () => {
    //let token: string;
    const api = apiUrl.BASE

    test('Get stat', async ({ API }) => {

        const res = await API.getReq(api + apiUrl.GET_STAT)
        expect(res.status()).toBe(200)
        expect((await res.json()).coins[0].denom).toBe('mpx')

        const mpx = ((await res.json()).coins[0].amount);
        expect(Number(mpx)).toBeGreaterThanOrEqual(Number('107939107470000000000000000'))

        const xfi = ((await res.json()).coins[1].amount);
        expect(Number(xfi)).toBeGreaterThanOrEqual(Number('136654235000000000000000000'))
    });

});
