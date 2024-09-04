import { Page } from "@playwright/test";

export class BlocksBlock{
    constructor(protected readonly page:Page){}

    //
    public async preLoader() {
        const title = this.page.locator('.MuiBackdrop-root')
        return await title?.isHidden();
    };
    public async allBlocksIsVisible() {
        const title = this.page.locator('//*[@id="__next"]/div/div/div/div/div/main/div')
        return await title;
    };
    public async getBlocksTitle() {
        const title = this.page.getByTestId('block-title-test-id').getByRole('heading')
        return await title?.textContent();
    };
    public async getBlocksTable() {
        const title = this.page.locator('thead')
        return await title?.textContent();
    };
    public async getInTable() {
        const title = this.page.locator('tbody')
        return await title?.textContent();
    };
    public async getTableBlockHeight() {
        const title = this.page.locator('//*[@id="__next"]//main//div[2]//div[1]/table/tbody/tr[1]/td[1]//a/div/span')
        return await title?.textContent();
    };
    public async getTableBlockRealTime() {
        const title = this.page.locator('//*[@id="__next"]//main//div[2]//div[1]/table/tbody/tr[1]/td[1]//p')
        return await title?.textContent();
    };
    public async getTableBlockValidator() {
        const title = this.page.locator('//*[@id="__next"]//table/tbody/tr[1]/td[3]/div/a/div/div[2]/span')
        return await title?.textContent();
    };
    public async getTableBlockSize() {
        const title = this.page.locator('//*[@id="__next"]//table/tbody/tr[1]/td[4]//p')
        return await title?.textContent();
    };
    public async getTableTransactionCount() {
        const title = this.page.locator('//*[@id="__next"]//table/tbody/tr[1]/td[5]//p')
        return await title?.textContent();
    };
    public async getTableGasUsed() {
        const title = this.page.locator('//*[@id="__next"]//table/tbody/tr[1]/td[6]//p[1]')
        return await title?.textContent();
    };
    public async getTableGasUsedPercent() {
        const title = this.page.locator('//*[@id="__next"]//table/tbody/tr[1]/td[6]//p[2]')
        return await title?.textContent();
    };

    public async getTableGasLimit() {
        const title = this.page.locator('//*[@id="__next"]//table/tbody/tr[1]/td[7]//p')
        return await title?.textContent();
    };
    public async getTableBaseFee() {
        const title = this.page.locator('//*[@id="__next"]//table/tbody/tr[1]/td[8]/div/div/h6')
        return await title?.textContent();
    };
    public async getTableBaseFeeName() {
        const title = this.page.locator('//*[@id="__next"]//table/tbody/tr[1]/td[8]/div/div/p');
        return await title?.textContent();
    };
    public async getTableValidatorsCount() {
        const title = this.page.locator('//*[@id="__next"]//table/tbody/tr[1]/td[9]/div/p');
        return await title?.textContent();
    };
    public async getTableRewards() {
        const title = this.page.locator('//*[@id="__next"]//table/tbody/tr[1]/td[10]/div/div/h6');
        return await title?.textContent();
    };
    public async getTableRewardsName() {
        const title = this.page.locator('//*[@id="__next"]//table/tbody/tr[1]/td[10]/div/div/p');
        return await title?.textContent();
    };
    //Pagination
    public async getPaginationToGoPage() {
        const title = this.page.getByTestId('input-pagination-container-test-id');
        return await title?.textContent();
    };
    public async getPaginationInput() {
        const title = this.page.getByTestId('input-pagination-test-id').getByRole('textbox');
        return await title;
    };
    public async getPaginationOne() {
        const title = this.page.getByLabel('page 1');
        return await title?.textContent();
    };
    public async getPaginationTwo() {
        const title = this.page.getByLabel('Go to page 2', { exact: true });
        return await title?.textContent();
    };
    public async getPaginationThree() {
        const title = this.page.getByLabel('Go to page 3');
        return await title?.textContent();
    };
    public async getPaginationFour() {
        const title = this.page.getByLabel('Go to page 4');
        return await title?.textContent();
    };
    public async getPaginationFive() {
        const title = this.page.getByLabel('Go to page 5');
        return await title?.textContent();
    };
    public async getPaginationEtc() {
        const title = this.page.getByTestId('pagination-default-test-id').getByRole('heading');
        return await title?.textContent();
    };
    public async getPaginationLast() {
        const title = this.page.locator('//*[@id="__next"]//nav/ul/li[7]/div/p');
        return await title?.textContent();
    };
    public async getRefreshButton() {
        const title = this.page.getByTestId('button-test-id');
        return await title?.textContent();
    };

    public async getUrl() {
        const title = this.page.waitForTimeout(700);
        return await title;
    };
}