import test, { expect } from "@playwright/test"
import { PageFactory } from "../pages/pageFactory"
import { DetailBlockPage } from "../pages/detailBlockPage";
import { detailBlock } from "../../consts/scanConst";

test.describe.only('check Information block page', () => {
  let detailBlockPage: DetailBlockPage

  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    detailBlockPage = PageFactory.getPage(page, "Detail Block Page") as DetailBlockPage;
  
    await detailBlockPage.viewPage();

    await detailBlockPage.getDevPassField();
    await detailBlockPage.goDevNext()
  });
  test('check head of page', async () => {
    const getPageIsVisible = await detailBlockPage.headOfDetailBlock.getPageIsVisible();
    const getBack = await detailBlockPage.headOfDetailBlock.getBack();
    const getBlock = await detailBlockPage.headOfDetailBlock.getBlock();
    const getBlockNoRaw = await detailBlockPage.headOfDetailBlock.getBlockNo();
    const getBlockNo = getBlockNoRaw ? getBlockNoRaw.replace(/[$%\s]/g, '') : null;

    expect(getPageIsVisible).toBeTruthy();
    await expect(getBack).toHaveText("Back");
    await expect(getBlock).toHaveText("Block");
    await expect(Number(getBlockNo)).toBe(detailBlock)
  });
  test('check Tabs', async () => {
    //Tabs
    const getTab = await detailBlockPage.detailBlockTabs.getTab();
    const getTabInformation = await detailBlockPage.detailBlockTabs.getTabInformation();
    const getTabInformationCheck = await detailBlockPage.detailBlockTabs.getTabInformationCheck();
    const getTabTransactions = await detailBlockPage.detailBlockTabs.getTabTransactions();
    const getTabTransactionsCheck = await detailBlockPage.detailBlockTabs.getTabTransactionsCheck();
    const getTabValidators = await detailBlockPage.detailBlockTabs.getTabValidators();
    const getTabValidatorsCheck = await detailBlockPage.detailBlockTabs.getTabValidatorsCheck();
    
    expect(getTab).toBeTruthy();
    await expect(getTabInformation).toHaveText('Information');
    expect(getTabInformationCheck).toBe('true');
    await expect(getTabTransactions).toHaveText('Transactions');
    expect(getTabTransactionsCheck).toBe('false');
    await expect(getTabValidators).toHaveText('Validators');
    expect(getTabValidatorsCheck).toBe('false');
  });
  test('check main Block of information', async () => {

    const path = detailBlockPage.detailBlockInformation;

    const getPageIsVisible = await path.getPageIsVisible();
    expect(getPageIsVisible).toBeTruthy();

    const getTitle = await path.getTitle();
    const getBlockNoName = await path.getBlockNoName();
    const getBlockNoRaw = await path.getBlockNo();
    const getBlockNo = getBlockNoRaw ? getBlockNoRaw.replace(/[$%\s]/g, '') : null;

    const getBlockDateName = await path.getBlockDateName();
    const getBlockDate = await path.getBlockDate();

    const getBlockTimeName = await path.getBlockTimeName();
    const getBlockTime = await path.getBlockTime();

    const getBlockProposerName = await path.getBlockProposerName();
    const getBlockProposer = await path.getBlockProposer();

    const getBlockSizeName = await path.getBlockSizeName();
    const getBlockSize = await path.getBlockSize();


    await expect(getTitle).toHaveText('Block information');
    await expect(getBlockNoName).toHaveText('Block');
    expect(Number(getBlockNo)).toBe(detailBlock);

    await expect(getBlockDateName).toHaveText('Date');
    await expect(getBlockDate).toHaveText('(August 29, 2024 14:02:20)');

    await expect(getBlockTimeName).toHaveText('Time');
    await expect(getBlockTime).toHaveText('5 seconds');

    await expect(getBlockProposerName).toHaveText('Proposer');//
    await expect(getBlockProposer).toHaveText('validator1');

    await expect(getBlockSizeName).toHaveText('Size');
    await expect(getBlockSize).toHaveText('1 756 bytes');
  })
})