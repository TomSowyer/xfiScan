import { Page } from "@playwright/test";

export class EmissionBlock{
    constructor(protected readonly page:Page){}

    public async emissionBlockIsVisible() {
        const title = this.page.getByRole('main')
        return await title?.isVisible();
    };
    public async getEmissionBlock() {
        const title = this.page.getByRole('main')
        return await title?.textContent();
    };
}