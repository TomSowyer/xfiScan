import { Page, selectors } from "@playwright/test";
import { Footer} from "../elements/footer";
import { NavBar } from "../elements/navBar";
import { BasicBlock } from "../elements/mainPage/basicBlock";
import { ValidatorsBlock } from "../elements/mainPage/validatorsBlock";
import { CoinsBlock } from "../elements/mainPage/coinsBlock";
import { EmissionBlock } from "../elements/mainPage/emissionBlock";
import { BlocksBlock } from "../elements/blocksPage/blocksBlock"
import { DetailBlockTabs } from "../elements/blocksPage/detailBlockTabs";
import { HeadOfDetailBlock } from "../elements/blocksPage/headOfBlockDetail";
import { DetailBlockInformation } from "../elements/blocksPage/InformationBlockDetail";


export class BasePage {
    protected url!:string;

    public footer:Footer;
    public navBar:NavBar;

    public basicBlock:BasicBlock;
    public validatorsBlock:ValidatorsBlock;
    public coinstBlock:CoinsBlock;
    public emissionBlock:EmissionBlock;

    public blocksBlock:BlocksBlock;
    public detailBlockTabs:DetailBlockTabs;
    public headOfDetailBlock:HeadOfDetailBlock;
    public detailBlockInformation:DetailBlockInformation

    constructor(protected page:Page){
        this.footer = new Footer(page);
        this.navBar = new NavBar(page);

        this.basicBlock = new BasicBlock(page);
        this.validatorsBlock = new ValidatorsBlock(page);
        this.coinstBlock = new CoinsBlock(page);
        this.emissionBlock = new EmissionBlock(page);

        this.blocksBlock = new BlocksBlock(page);
        this.detailBlockTabs = new DetailBlockTabs(page);
        this.headOfDetailBlock = new HeadOfDetailBlock(page)
        this.detailBlockInformation = new DetailBlockInformation(page)
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