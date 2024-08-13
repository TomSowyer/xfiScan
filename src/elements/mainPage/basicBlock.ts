import { Page } from "@playwright/test";

export class BasicBlock{
    constructor(protected readonly page:Page){}

    //upper than menu
    public async mainBlockIsVisible() {
        const title = this.page.getByRole('main')
        return await title?.isVisible();
    };
    public async getMainBlock() {
        const title = this.page.getByRole('main')
        return await title?.textContent();
    };
    public async getXfiPrice() {
        const title = this.page.getByRole('heading', { name: "$0." })
        return await title?.textContent();
    };
    public async getXfiCapitalization() {
        const title = this.page.locator('//*[@id="__next"]//main//div[1]/div[2]//div[1]/div[3]/p[2]')
        return await title?.textContent();
    };
    public async getApr() {
        const title = this.page.locator('//*[@id="__next"]//main//div[1]/div[2]//div[2]/div[2]/h6[2]')
        return await title?.textContent();
    };
    public async getMpxStake() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[2]/div[3]/div/p[1]')
        return await title?.textContent();
    };
    public async getBlockHeight() {
        const title = this.page.locator('//*[@id="__next"]//main//div[1]/div[2]/div/div[3]/div[1]/h6[2]')
        return await title?.textContent();
    };
    public async getTransaction() {
        const title = this.page.locator('//*[@id="__next"]//main//div[1]/div[2]/div/div[4]/div[1]/h6[2]')
        return await title?.textContent();
    };
    public async getTransactionPerSecond() {
        const title = this.page.locator('//*[@id="__next"]//main//div[1]/div[2]/div/div[4]/div[2]/p[2]')
        return await title?.textContent();
    };
}
//getByText('$84 139')