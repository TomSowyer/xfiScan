import { Page } from "@playwright/test";

export class CoinsBlock{
    constructor(protected readonly page:Page){}

    public async coinsBlockIsVisible() {
        const title = this.page.getByRole('main')
        return await title?.isVisible();
    };
    public async getCoinsBlock() {
        const title = this.page.getByRole('main')
        return await title?.textContent();
    };
    //XFI
    public async getInCirculationXfi() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[1]/div[2]/h6[2]')
        return await title?.textContent();
    };
    public async getUnpaidXfi() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[1]/div[3]/div/p[1]')
        return await title?.textContent();
    };
    public async getUnpaidXfiPercent() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[1]/div[3]//p[2]')
        return await title?.textContent();
    };
    public async getXfiHolders() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[1]/div[4]/p')
        return await title?.textContent();
    };
    ///MPX
    public async getInCirculationMpx() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[2]/div[2]/h6[2]')
        return await title?.textContent();
    };
    public async getInStakeMpx() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[2]/div[3]/div/p[1]')
        return await title?.textContent();
    };
    public async getInStakeMpxPercent() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[2]/div[3]/div/p[2]')
        return await title?.textContent();
    };
    public async getUnbondingMpx() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[2]/div[4]/div/p[1]')
        return await title?.textContent();
    };
    public async getUnbondingMpxPercent() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[2]/div[4]/div/p[2]')
        return await title?.textContent();
    };
    public async getFreeMpx() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[2]/div[5]/div/p[1]')
        return await title?.textContent();
    };
    public async getFreeMpxPercent() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[2]/div[5]/div/p[2]')
        return await title?.textContent();
    };
    public async getMpxHolders() {
        const title = this.page.locator('//*[@id="__next"]//main//div[3]/div[2]//div[2]/div[6]/p')
        return await title?.textContent();
    };
}