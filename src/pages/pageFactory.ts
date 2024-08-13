import { Page } from "@playwright/test";
import { DashboardPage } from "./dashboardPage";

export class PageFactory{
    static getPage(page:Page, pageName:string){
        switch(pageName){
            case("Dashboard Page"):
            return new DashboardPage(page)
        }
    }
}