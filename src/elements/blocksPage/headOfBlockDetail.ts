import { Page } from "@playwright/test";

export class HeadOfDetailBlock{
    constructor(protected readonly page:Page){}

    
    //head of page
    public async getPageIsVisible() {
        const title = this.page.getByRole('main');
        return await title?.isVisible();
    };
    public async getBack() {
        const title = this.page.getByTestId('back-button-test-id');
        return title;
    }
    public async getBlock() {
        const title = this.page.getByTestId('heading-test-id').getByText('Block');
        return title;
    }
    public async getBlockNo() {
        const title = this.page.locator('//*[@id="__next"]//main//div[1]/div/div[2]/p[2]');
        return title?.textContent();
    }
    // 
}