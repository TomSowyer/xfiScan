import { Page } from "@playwright/test";


export class Footer{
    constructor(protected readonly page:Page){}

    //icons
    public async getFooterIcon() {
        const title = this.page.locator('.footer > div > div > .MuiSvgIcon-root')
        return await title?.isVisible();
    }
    public async getFooterTg() {
        const title = this.page.getByTestId('icon-link-link-test-id0')
        return await title?.isVisible();
    }
    public async getFooterMedium() {
        const title = this.page.getByTestId('icon-link-link-test-id1')
        return await title?.isVisible();
    }
    public async getFooterX() {
        const title = this.page.getByTestId('icon-link-link-test-id2')
        return await title?.isVisible();
    }
    public async getFooterFacebook() {
        const title = this.page.getByTestId('icon-link-link-test-id3')
        return await title?.isVisible();
    }
    public async getFooterDiscord() {
        const title = this.page.getByTestId('icon-link-link-test-id4')
        return await title?.isVisible();
    }
    public async getFooterLink() {
        const title = this.page.getByTestId('icon-link-link-test-id5')
        return await title?.isVisible();
    }
    public async getFooterGit() {
        const title = this.page.getByTestId('icon-link-link-test-id6')
        return await title?.isVisible();
    }

    //ecosystem
    public async getFooterEco() {
        const title = this.page.getByRole('heading', { name: 'Ecosystem' })
        return await title?.textContent();
    }
    public async getFooterCrossFi() {
        const title = this.page.getByRole('link', { name: 'Cross Finance' })
        return await title?.textContent();
    }
    public async getFooterFundation() {
        const title = this.page.getByRole('link', { name: 'CrossFi Foundation' })
        return await title?.textContent();
    }
    public async getFooterScan() {
        const title = this.page.getByRole('link', { name: 'XFI Console' })
        return await title?.textContent();
    }
    //License

    public async getFooterLicense() {
        const title = this.page.getByText('License:')
        return await title?.textContent();
    }
    public async getFooterLongText() {
        const title = this.page.getByText('Ref. No.: OOZU/10147/2023/Vrt')
        return await title?.textContent();
    };
    public async getFooterName() {
        const title = this.page.getByRole('heading', { name: '© CROSSFI' })
        return await title?.textContent();
    };
    public async getFooterAddress() {
        const title = this.page.getByRole('contentinfo')
        return await title?.textContent();
    };
    public async getFooterRights() {
        const title = this.page.getByRole('contentinfo')
        return await title?.textContent();
    };
}