import { Page } from "@playwright/test";
import { MainPage } from "./mainPage";
import { BlocksPage } from "./blocksPage";
import { DetailBlockPage } from "./detailBlockPage";

export class PageFactory{
    static getPage(page:Page, pageName:string){
        switch(pageName){
            case("Dashboard Page"):
            return new MainPage(page)
            case("Blocks Page"):
            return new BlocksPage(page)
            case("Detail Block Page"):
            return new DetailBlockPage(page)
        }
    }
}