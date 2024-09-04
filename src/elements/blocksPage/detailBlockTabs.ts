import { Page } from "@playwright/test";

export class DetailBlockTabs{
    constructor(protected readonly page:Page){}

    public async getTab() {
        const title = this.page.getByRole('main').getByTestId('tabs-test-id');
        return await title?.isVisible();
    };
    public async getTabInformation() {
        const title = this.page.getByRole('tab', { name: 'Information' });
        return title;
    }
    ;public async getTabInformationCheck() {
        const title =  this.page.getByRole('tab', { name: 'Information' });
        return await title?.getAttribute('aria-selected');
    }
    ;
    public async getTabTransactions() {
        const title = this.page.getByRole('tab', { name: 'Transactions' });
        return title;
    }
    ;
    public async getTabTransactionsCheck() {
        const title = this.page.getByRole('tab', { name: 'Transactions' });
        return await  title?.getAttribute('aria-selected');
    };
    public async getTabValidators() {
        const title = this.page.getByRole('tab', { name: 'Validators' });
        return title;
    };
    public async getTabValidatorsCheck() {
        const title = this.page.getByRole('tab', { name: 'Validators' });
        return await title?.getAttribute('aria-selected');
    };
}