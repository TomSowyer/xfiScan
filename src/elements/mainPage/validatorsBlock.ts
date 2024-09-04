import { Page } from "@playwright/test";

export class ValidatorsBlock{
    constructor(protected readonly page:Page){}

    //upper than menu
    public async validatorsBlockIsVisible() {
        const title = this.page.getByRole('main')
        return await title?.isVisible();
    };
    public async getValidatorsBlock() {
        const title = this.page.getByRole('main')
        return await title?.textContent();
    };
    public async getMaxValidators() {
        const title = this.page.locator('//*[@id="__next"]//main//div[2]/div[2]//div[1]/div/h6[2]')
        return await title?.textContent();
    };
    public async getActiveValidators() {
        const title = this.page.locator('//*[@id="__next"]//main//div[2]/div[2]/div/div[2]/div/h6[2]')
        return await title?.textContent();
    };
    public async getInactiveValidators() {
        const title = this.page.locator('//*[@id="__next"]//main//div[2]/div[2]//div[3]//h6[2]')
        return await title?.textContent();
    };
    public async getNumOfAddresses() {
        const title = this.page.locator('//*[@id="__next"]//main//div[2]/div[2]//div[4]//h6[2]')
        return await title?.textContent();
    };
}