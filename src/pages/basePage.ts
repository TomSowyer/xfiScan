import { Page, selectors } from "@playwright/test";
import { Footer} from "../elements/footer";
import { NavBar } from "../elements/navBar";
import { BasicBlock } from "../elements/mainPage/basicBlock";

export class BasePage {
    protected url!:string;

    public footer:Footer
    public navBar:NavBar

    public basicBlock:BasicBlock

    constructor(protected page:Page){
        this.footer = new Footer(page);
        this.navBar = new NavBar(page);
        this.basicBlock = new BasicBlock(page)
    };

    public async viewPage(){
        return await this.page.goto(this.url)
    }

    public async getElement(locator:string){
        return await this.page.$(locator)
    }

    public async getVisible(locator:string){
        return await this.page.locator(locator)
    }
    public async getChecked(locator:string, checked:boolean){
        return await this.page.setChecked(locator,checked)
    }
    // public async takeScreenshot() {
    //     const contentInfo = this.page.getByRole('contentinfo');
    //     const screenshotBuffer = await contentInfo.screenshot();
    //     return screenshotBuffer;
    // }
    public async closePage(){
        return await this.page.close()
    }

}