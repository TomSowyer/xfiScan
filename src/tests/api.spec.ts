import { expect } from "@playwright/test";
import { fixtures as test } from "../utils/fixture"
import { faker } from '@faker-js/faker'


let email: string | null = null;
function generateRandomEmail(): string {
    return faker.internet.email();
}

test.describe.skip('Api test', () => {
    let token: string;
    token = "" ,
    test.beforeAll(() => {
        email = generateRandomEmail();
    });


    test('Get stat', async ({ API }) => {


        const res = await API.postReq("https://dvsr.axolot.org/api/1.0/axolot/auth/registration", 
            {
                password: "Test#1234",
                email: `${email}`,
                ownerUid: "128590"
              }
            )

        expect(res.status()).toBe(200);
        expect(res.text()).not.toBe(null);

    });

    test('Confirm registr', async ({ API }) => {

        const res = await API.postReq("https://dvsr.axolot.org/api/1.0/axolot/auth/confirm/registration", 
            {
                email: `${email}`,
                code: "000000"
              })
        expect(res.status()).toBe(201)
        //expect(res.json()).toContain('account');

    });


});