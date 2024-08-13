import test, { expect } from "@playwright/test"
import { DashboardPage } from "../pages/dashboardPage"
import { PageFactory } from "../pages/pageFactory"
import { qase } from 'playwright-qase-reporter'
import { footerLongTexts } from "../../consts/dashboardConst"

test.describe('Main Page tests', () => {
  let dashboardPage: DashboardPage

  test.beforeEach(async ({ browser }) => {
    const page = await browser.newPage();
    dashboardPage = PageFactory.getPage(page, "Dashboard Page") as DashboardPage;
  
    await dashboardPage.viewPage();

    await dashboardPage.getDevPassField();
    await dashboardPage.goDevNext()
  });
/*   test("skip dev mode", async () =>{
    const passField = await dashboardPage.getDevPassField()
    const nextButton = await dashboardPage.goDevNext()
    qase.id(1);
    qase.title('Example of simple test');
  }) */

  test('check footer', async () => {
    //icons
    const iconMain = await dashboardPage.footer.getFooterIcon();
    const iconTg = await dashboardPage.footer.getFooterTg();
    const iconMedium = await dashboardPage.footer.getFooterMedium();
    const iconX = await dashboardPage.footer.getFooterX();
    const iconFacebook = await dashboardPage.footer.getFooterFacebook();
    const iconDiscord = await dashboardPage.footer.getFooterDiscord();
    const iconLink = await dashboardPage.footer.getFooterLink();
    const iconGit = await dashboardPage.footer.getFooterGit();
    //ecosystem
    const ecosystem = await dashboardPage.footer.getFooterEco();
    const crossFi = await dashboardPage.footer.getFooterCrossFi();
    const fundation = await dashboardPage.footer.getFooterFundation();
    const scan = await dashboardPage.footer.getFooterScan();
    //license
    const license = await dashboardPage.footer.getFooterLicense();
    const longText = await dashboardPage.footer.getFooterLongText();
    const name = await dashboardPage.footer.getFooterName();
    const address = await dashboardPage.footer.getFooterAddress();
    const rights = await dashboardPage.footer.getFooterRights();

    //icons
    expect(iconMain).toBeTruthy();
    expect(iconTg).toBeTruthy();
    expect(iconMedium).toBeTruthy();
    expect(iconX).toBeTruthy();
    expect(iconFacebook).toBeTruthy();
    expect(iconDiscord).toBeTruthy();
    expect(iconLink).toBeTruthy();
    expect(iconGit).toBeTruthy();
    //ecosystem
    expect(ecosystem).toContain('Ecosystem');
    expect(crossFi).toContain('Cross Finance');
    expect(fundation).toContain('CrossFi Foundation');
    expect(scan).toContain('XFI Console');
    //license and more down
    expect(license).toContain('License:');
    expect(longText).toContain(footerLongTexts.refNo);
    expect(name).toContain('© CROSSFI');
    expect(address).toContain(footerLongTexts.address);
    expect(rights).toContain('All rights reserved');

    //qase
    qase.id(2);
    qase.title('new');

  });

  test('check nav menu', async () => {

    //upper than menu
    const mainIcon = await dashboardPage.navBar.getMainIcon();
    const closeButton = await dashboardPage.navBar.getCloseButton();

    //menu items
    const mainPage = await dashboardPage.navBar.getMainPage();
    const blocks = await dashboardPage.navBar.getBlock();
    const transaction = await dashboardPage.navBar.getTransactions();
    const validators = await dashboardPage.navBar.getValidators();
    const tokens = await dashboardPage.navBar.getTokens();
    const smarts = await dashboardPage.navBar.getSmart();
    const nft = await dashboardPage.navBar.getNft();

    //menu parse texts
    const menuTexts = await dashboardPage.navBar.getMenuTexts();

    //lower than menu
    const themeIcon = await dashboardPage.navBar.getThemeIcon();
    const themeText = await dashboardPage.navBar.getThemeText();
    const getDarkTheme = await dashboardPage.navBar.getDarkTheme();
    const onLightTheme = await dashboardPage.navBar.onLightTheme();
    const getLightTheme = await dashboardPage.navBar.getLightTheme();
    const onDarkTheme = await dashboardPage.navBar.onDarkTheme();

    //upper than menu
    expect(mainIcon).toBeTruthy();
    expect(closeButton).toBeTruthy();

    //menu items
    expect(mainPage).toBeTruthy();
    expect(blocks).toBeTruthy();
    expect(transaction).toBeTruthy();
    expect(validators).toBeTruthy();
    expect(tokens).toBeTruthy();
    expect(smarts).toBeTruthy();
    expect(nft).toBeTruthy();
    
    //menu parse texts
    expect(menuTexts).toContain('Main page');
    expect(menuTexts).toContain('Blocks');
    expect(menuTexts).toContain('Transactions');
    expect(menuTexts).toContain('Validators');
    expect(menuTexts).toContain('Tokens');
    expect(menuTexts).toContain('Smart contract');
    expect(menuTexts).toContain('NFTs');

    //lower than menu
    expect(themeIcon).toBeTruthy();
    expect(themeText).toContain('Theme');
    expect(getDarkTheme).toBeFalsy();
    expect(onLightTheme)
    expect(getLightTheme).toBeTruthy();
    expect(onDarkTheme)
    expect(getDarkTheme).toBeFalsy();
  });
  test('check basic block', async () => {
    const getMainBlock = await dashboardPage.basicBlock.getMainBlock();
    const mainBlockIsVisible = await dashboardPage.basicBlock.mainBlockIsVisible();
    const xfiPriceRaw = (await dashboardPage.basicBlock.getXfiPrice());
    const xfiPrice = xfiPriceRaw ? xfiPriceRaw.replace(/[$%\s]/g, '') : null;
    const xfiCapitalizationRaw = (await dashboardPage.basicBlock.getXfiCapitalization());
    const xfiCapitalization = xfiCapitalizationRaw ? xfiCapitalizationRaw.replace(/[$%\s]/g, '') : null;

    const xfiAprRaw = (await dashboardPage.basicBlock.getApr());
    const xfiApr = xfiAprRaw ? xfiAprRaw.replace(/[$%\s]/g, '') : null;
    const mpxStakeRaw = (await dashboardPage.basicBlock.getMpxStake());
    const mpxStake = mpxStakeRaw ? mpxStakeRaw.replace(/[$%\s]/g, '') : null;

    const blockHeightRaw = (await dashboardPage.basicBlock.getBlockHeight());
    const blockHeight = blockHeightRaw ? blockHeightRaw.replace(/[$%\s]/g, '') : null;

    const transactionRaw = (await dashboardPage.basicBlock.getTransaction());
    const transaction = transactionRaw ? transactionRaw.replace(/[$%\s]/g, '') : null;
    const transactionPerSecondRaw = (await dashboardPage.basicBlock.getTransactionPerSecond());
    const transactionPerSecond = transactionPerSecondRaw ? transactionPerSecondRaw.replace(/[$%\s]/g, '') : null;

    //price
    expect(getMainBlock).toContain('Basic information');
    expect(getMainBlock).toContain('XFI');
    expect(getMainBlock).toContain('Price');
    expect(Number(xfiPrice)).toBeGreaterThanOrEqual(0.5);
    expect(getMainBlock).toContain('Market capitalization');
    expect(Number(xfiCapitalization)).toBeGreaterThanOrEqual(84619368.76);
    //apr
    expect(getMainBlock).toContain('MPX');
    expect(getMainBlock).toContain('$APR');
    const trueApr = (Number(xfiPrice)*6307200*5)/(Number(mpxStake)/50)*100;
    expect(Number(xfiApr)).toBeGreaterThanOrEqual(trueApr);
    //blocks
    expect(getMainBlock).toContain('Blocks');
    expect(getMainBlock).toContain('Creation time');
    expect(Number(blockHeight)).toBeGreaterThan(5430284);
    expect(getMainBlock).toContain('5 seconds');
    //transactions
    expect(getMainBlock).toContain('Transactions');
    expect(Number(transaction)).toBeGreaterThanOrEqual(9112);
    expect(getMainBlock).toContain('Transactions per second');
    expect(Number(transactionPerSecond)).toBe(Math.floor(Number(transaction)/(Number(blockHeight)*5)* 1e10)/1e10);//Math.floor(num * 1e10) / 1e10
  });
})