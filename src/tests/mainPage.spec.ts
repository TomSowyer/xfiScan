import test, { expect } from "@playwright/test"
import { MainPage } from "../pages/mainPage"
import { PageFactory } from "../pages/pageFactory"
import { qase } from 'playwright-qase-reporter'
import { actualCountAddresses, footerLongTexts, holders, maxValidators } from "../../consts/scanConst"


test.describe('Main Page tests', () => {
  let dashboardPage: MainPage

  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    dashboardPage = PageFactory.getPage(page, "Dashboard Page") as MainPage;
  
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
    const bridge = await dashboardPage.footer.getFooterBridge();
    const getMpx = await dashboardPage.footer.getFooterGetMpx();
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
    expect(bridge).toContain('XFI Bridge');
    expect(getMpx).toContain('Get MPX');
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

  test('check Nav menu', async () => {

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
  test('check Basic block', async () => {
    //price
    const getMainBlock = await dashboardPage.basicBlock.getMainBlock();
    const mainBlockIsVisible = await dashboardPage.basicBlock.mainBlockIsVisible();
    const xfiPriceRaw = (await dashboardPage.basicBlock.getXfiPrice());
    const xfiPrice = xfiPriceRaw ? xfiPriceRaw.replace(/[$%\s]/g, '') : null;
    const xfiCapitalizationRaw = (await dashboardPage.basicBlock.getXfiCapitalization());
    const xfiCapitalization = xfiCapitalizationRaw ? xfiCapitalizationRaw.replace(/[$%\s]/g, '') : null;

    const getInCirculationXfiRaw = (await dashboardPage.coinstBlock.getInCirculationXfi());
    const getBasicInCirculationXfi = getInCirculationXfiRaw ? getInCirculationXfiRaw.replace(/[$%\s]/g, '') : null;
    //apr
    const xfiAprRaw = (await dashboardPage.basicBlock.getApr());
    const xfiApr = xfiAprRaw ? xfiAprRaw.replace(/[$%\s]/g, '') : null;
    const mpxStakeRaw = (await dashboardPage.basicBlock.getMpxStake());
    const mpxStake = mpxStakeRaw ? mpxStakeRaw.replace(/[$%\s]/g, '') : null;
    //blocks
    const blockHeightRaw = (await dashboardPage.basicBlock.getBlockHeight());
    const blockHeight = blockHeightRaw ? blockHeightRaw.replace(/[$%\s]/g, '') : null;
    //transactions
    const transactionRaw = (await dashboardPage.basicBlock.getTransaction());
    const transaction = transactionRaw ? transactionRaw.replace(/[$%\s]/g, '') : null;
    const transactionPerSecondRaw = (await dashboardPage.basicBlock.getTransactionPerSecond());
    const transactionPerSecond = transactionPerSecondRaw ? transactionPerSecondRaw.replace(/[$%\s]/g, '') : null;


    //price
    expect(getMainBlock).toContain('Basic information');
    expect(getMainBlock).toContain('XFI');
    expect(getMainBlock).toContain('Price');
    expect(Number(xfiPrice)).toBeGreaterThanOrEqual(0);
    expect(getMainBlock).toContain('Market capitalization');
    expect(Math.floor(Number(xfiCapitalization))).toBe(Math.floor(Number(getBasicInCirculationXfi)*Number(xfiPrice)));// add formula for price
    //apr
    expect(getMainBlock).toContain('MPX');
    expect(getMainBlock).toContain('$APR');
    const trueApr = (Number(xfiPrice)*6307200*5)/(Number(mpxStake)/50)*100;
    expect(Number(xfiApr)).toBeGreaterThanOrEqual((Math.floor(trueApr * 100) / 100));//there
    //blocks
    expect(getMainBlock).toContain('Blocks');
    expect(getMainBlock).toContain('Creation time');
    expect(Number(blockHeight)).toBeGreaterThan(17343);
    expect(getMainBlock).toContain('5 seconds');
    //transactions
    expect(getMainBlock).toContain('Transactions');
    expect(Number(transaction)).toBeGreaterThanOrEqual(1);
    expect(getMainBlock).toContain('Transactions per second');
    expect(Number(transactionPerSecond)).toBe(Math.floor(Number(transaction)/(Number(blockHeight)*5)* 1e10)/1e10);//Math.floor(num * 1e10) / 1e10
  });

  test('check Validators/addresses block', async () => {
    const getValidatorsBlock = await dashboardPage.validatorsBlock.getValidatorsBlock();

    const getMaxValidators = await dashboardPage.validatorsBlock.getMaxValidators();
    const getActiveValidators = await dashboardPage.validatorsBlock.getActiveValidators();
    const getInactiveValidators = await dashboardPage.validatorsBlock.getInactiveValidators();
    const getNumOfAddresses = await dashboardPage.validatorsBlock.getNumOfAddresses();
    //Max validators
    expect(getValidatorsBlock).toContain('Maximum active validators');
    expect(Number(getMaxValidators)).toBe(maxValidators);
    //Active validators
    expect(getValidatorsBlock).toContain('Active validators');
    expect(Number(getActiveValidators)).toBeGreaterThan(0);
    //Inactive validators
    expect(getValidatorsBlock).toContain('Inactive validators');
    expect(Number(getInactiveValidators)).toBeGreaterThanOrEqual(6);
    //Actual adrresses count
    expect(getValidatorsBlock).toContain('Number of addresses');
    expect(Number(getNumOfAddresses)).toBeGreaterThanOrEqual(actualCountAddresses);
  });

  test('check Coins block', async () => {
    const getCoinsBlock = await dashboardPage.coinstBlock.getCoinsBlock();
    //XFI
    const getInCirculationXfiRaw = (await dashboardPage.coinstBlock.getInCirculationXfi());
    const getInCirculationXfi1 = getInCirculationXfiRaw ? getInCirculationXfiRaw.replace(/[$%\s]/g, '') : null;

    const getUnpaidXfiRaw = (await dashboardPage.coinstBlock.getUnpaidXfi());
    const getUnpaidXfi = getUnpaidXfiRaw ? getUnpaidXfiRaw.replace(/[$%\s]/g, '') : null;

    const getUnpaidXfiPercentRaw = (await dashboardPage.coinstBlock.getUnpaidXfiPercent());
    const getUnpaidXfiPercent = getUnpaidXfiPercentRaw ? getUnpaidXfiPercentRaw.replace(/[$%\s]/g, '') : null;
    const unpaidPercent = ((Number(getUnpaidXfi))/(Number(getInCirculationXfi1))*100);

    const getXfiHoldersRaw = (await dashboardPage.coinstBlock.getXfiHolders());
    const getXfiHolders = getXfiHoldersRaw ? getXfiHoldersRaw.replace(/[$%\s]/g, '') : null;
    //MPX
    const getInCirculationMpxRaw = (await dashboardPage.coinstBlock.getInCirculationMpx());
    const getInCirculationMpx = getInCirculationMpxRaw ? getInCirculationMpxRaw.replace(/[$%\s]/g, '') : null;

    const getInStakeMpxRaw = (await dashboardPage.coinstBlock.getInStakeMpx());
    const getInStakeMpx = getInStakeMpxRaw ? getInStakeMpxRaw.replace(/[$%\s]/g, '') : null;

    const getInStakeMpxPercentRaw = (await dashboardPage.coinstBlock.getInStakeMpxPercent());
    const getInStakeMpxPercent = getInStakeMpxPercentRaw ? getInStakeMpxPercentRaw.replace(/[$%\s]/g, '') : null;
    const inStakePercent = ((Number(getInStakeMpx))/(Number(getInCirculationMpx))*100);

    const getUnbondingMpxRaw = (await dashboardPage.coinstBlock.getUnbondingMpx());
    const getUnbondingMpx = getUnbondingMpxRaw ? getUnbondingMpxRaw.replace(/[$%\s]/g, '') : null;

    const getUnbondingMpxPercentRaw = (await dashboardPage.coinstBlock.getUnbondingMpxPercent());
    const getUnbondingMpxPercent = getUnbondingMpxPercentRaw ? getUnbondingMpxPercentRaw.replace(/[$%\s]/g, '') : null;
    const unbondingPercent = ((Number(getUnbondingMpx))/(Number(getInCirculationMpx))*100);

    const getFreeMpxRaw = (await dashboardPage.coinstBlock.getFreeMpx());
    const getFreeMpx = getFreeMpxRaw ? getFreeMpxRaw.replace(/[$%\s]/g, '') : null;

    const getFreeMpxPercentRaw = (await dashboardPage.coinstBlock.getFreeMpxPercent());
    const getFreeMpxPercent = getFreeMpxPercentRaw ? getFreeMpxPercentRaw.replace(/[$%\s]/g, '') : null;
    const freeMpxPercent = ((Number(getFreeMpx))/(Number(getInCirculationMpx))*100);

    const getMpxHolders = (await dashboardPage.coinstBlock.getMpxHolders());

    expect(getCoinsBlock).toContain('Native coins');
    //XFI
    expect(getCoinsBlock).toContain('XFI');
    expect(getCoinsBlock).toContain('In circulation');
    expect(Number(getInCirculationXfi1)).toBeGreaterThan(137203475);
    expect(getCoinsBlock).toContain('Unpaid rewards');
    expect(Number(getUnpaidXfi)).toBeGreaterThanOrEqual(1000);
    expect(Number(getUnpaidXfiPercent)).toBe(Math.floor(unpaidPercent * 100) / 100);
    expect(getCoinsBlock).toContain('Holders');
    expect(Number(getXfiHolders)).toBeGreaterThanOrEqual(holders.XFI);
    //MPX
    expect(getCoinsBlock).toContain('MPX');
    expect(getCoinsBlock).toContain('In circulation');
    expect(Number(getInCirculationMpx)).toBeGreaterThan(107939107.40);
    expect(getCoinsBlock).toContain('In the stake');
    expect(Number(getInStakeMpx)).toBeGreaterThan(1770763.54);
    expect(Number(getInStakeMpxPercent)).toEqual(Math.floor(inStakePercent * 100) / 100);
    expect(getCoinsBlock).toContain('Unbonding');
    expect(Number(getUnbondingMpx)).toBeGreaterThan(100000);
    expect(Number(getUnbondingMpxPercent)).toEqual(Math.floor(unbondingPercent * 100) / 100);
    expect(getCoinsBlock).toContain('Free');
    expect(Number(getFreeMpx)).toBeGreaterThan(100000000);
    expect(Number(getFreeMpxPercent)).toEqual(Math.floor(freeMpxPercent * 100) / 100);
    expect(getCoinsBlock).toContain('Holders');
    expect(Number(getMpxHolders)).toBeGreaterThanOrEqual(holders.MPX);

  });
  test('check Emission block', async () => {
    const getEmissionBlock = await dashboardPage.emissionBlock.getEmissionBlock();

    expect(getEmissionBlock).toContain('XFI emission');
    expect(getEmissionBlock).toContain('Maximum emission');
    expect(getEmissionBlock).toContain('378 432 000');
    expect(getEmissionBlock).toContain('Issue period');
    expect(getEmissionBlock).toContain('1');
    expect(getEmissionBlock).toContain('1 - 25 228 800 Block');
    expect(getEmissionBlock).toContain('Block Reward');
    expect(getEmissionBlock).toContain('5 XFI');
    
  });
})