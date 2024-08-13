import { test as base } from "@playwright/test" ; 
import api from "../feartures/APIutils"; 
import { apiUrl } from "../../consts/dashboardConst";
type MyFixtures = {
    API: api;
};

const fixtures = base.extend<MyFixtures>({
    API: async ({ request }, use) => {
        const API = new api (request);
        await use (API);
    }
});
export { fixtures };