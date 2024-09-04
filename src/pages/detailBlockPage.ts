import { Page } from "@playwright/test"
import { BasePage } from "./basePage"
import { baseUrl, devPass } from "../../consts/scanConst"

export class DetailBlockPage extends BasePage {
    constructor(page: Page) {
        super(page)
        this.url = baseUrl.BLOCK
    }
    public async getDevPassField() {
        const title = this.page.getByPlaceholder('Password')
        return await title?.fill(devPass);
    }
    public async goDevNext() {
        const title = this.page.getByTestId('button-test-id')
        return await title?.click();
    }
};

