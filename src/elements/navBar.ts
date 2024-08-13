import { Page } from "@playwright/test";


export class NavBar{
    constructor(protected readonly page:Page){}

    //upper than menu
    public async getMainIcon() {
        const title = this.page.locator('a').first()
        return await title?.isVisible();
    }
    public async getCloseButton() {
        const title = this.page.getByRole('button')
        return await title?.isVisible();
    }
    //menu items
    public async getMainPage() {
        const title = this.page.getByRole('link', { name: 'Main page' })
        return await title?.isVisible();
    }
    public async getBlock() {
        const title = this.page.getByRole('link', { name: 'Blocks' })
        return await title?.isVisible();
    }
    public async getTransactions() {
        const title = this.page.getByRole('link', { name: 'Transactions' })
        return await title?.isVisible();
    }
    public async getValidators() {
        const title = this.page.getByRole('link', { name: 'Validators' })
        return await title?.isVisible();
    }
    public async getTokens() {
        const title = this.page.getByRole('link', { name: 'Tokens' })
        return await title?.isVisible();
    }
    public async getSmart() {
        const title = this.page.getByRole('link', { name: 'Smart contract' })
        return await title?.isVisible();
    }
    public async getNft() {
        const title = this.page.getByRole('link', { name: 'NFTs' })
        return await title?.isVisible();
    }

    //menu parse texts
    public async getMenuTexts() {
        const title = this.page.getByRole('complementary')
        return await title?.textContent();
    }

    //lower than menu
    public async getThemeIcon() {
        const title = this.page.locator('g > g > path').first()
        return await title?.isVisible();
    }
    public async getThemeText() {
        const title = this.page.getByRole('complementary')
        return await title?.textContent();
    };
    public async getDarkTheme() {
        const title = this.page.getByLabel('')
        return await title?.isChecked();
    };
    public async onLightTheme() {
        const title = this.page.getByLabel('')
        return await title?.check();
    };
    public async getLightTheme() {
        const title = this.page.getByLabel('')
        return await title?.isChecked();
    };
    public async onDarkTheme() {
        const title = this.page.getByLabel('')
        return await title?.uncheck();
    };
}