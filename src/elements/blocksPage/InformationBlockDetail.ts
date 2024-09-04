import { Page } from "@playwright/test";

export class DetailBlockInformation{
    constructor(protected readonly page:Page){}

    public async getPageIsVisible() {
        const title = this.page.getByRole('main');
        return await title?.isVisible();
    };

    public async getTitle() {
        const title = this.page.getByTestId('block-title-test-id').getByRole('heading');
        return title;
    }
    public async getBlockNoName() {
        const title = this.page.getByTestId('list-test-id').getByText('Block');
        return title;
    }
    public async getBlockNo() {
        const title = this.page.getByTestId('base-list-link-test-id');
        return await title?.textContent();
    }
    public async getBlockDateName() {
        const title = this.page.getByText('Date');
        return title;
    }
    public async getBlockDate() {
        const title = this.page.getByText('(August 29, 2024 14:02:20)');
        return title;
    }
    public async getBlockTimeName() {
        const title = this.page.getByText('Time');
        return title;
    }
    public async getBlockTime() {
        const title = this.page.locator('//*[@id="__next"]//main//div[2]/div/div[3]/div');
        return title;
    }
    public async getBlockProposerName() {
        const title = this.page.getByText('Proposer');
        return title;
    }
    public async getBlockProposer() {
        const title = this.page.getByRole('link', { name: 'validator1' });
        return title;
    }
    public async getBlockSizeName() {
        const title = this.page.getByText('Size');
        return title;
    }
    public async getBlockSize() {
        const title = this.page.locator('//*[@id="__next"]//main/div/div[2]//div[5]/div');
        return title;
    }
    // 
}