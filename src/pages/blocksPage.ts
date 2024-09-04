import { Page } from "@playwright/test"
import { BasePage } from "./basePage"
import { baseUrl, devPass } from "../../consts/scanConst"

export class BlocksPage extends BasePage {
    constructor(page: Page) {
        super(page)
        this.url = baseUrl.BLOCKS
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

