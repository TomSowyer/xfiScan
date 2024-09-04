import test, { expect } from "@playwright/test"
import { PageFactory } from "../pages/pageFactory"
import { BlocksPage } from "../pages/blocksPage"

test.describe('Blocks Page tests', () => {
  let blocksPage: BlocksPage

  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    blocksPage = PageFactory.getPage(page, "Blocks Page") as BlocksPage;
  
    await blocksPage.viewPage();

    await blocksPage.getDevPassField();
    await blocksPage.goDevNext()
  });

  test('check blocks page', async () => {
    
    const preLoader = await blocksPage.blocksBlock.preLoader();
    const allBlocks = await blocksPage.blocksBlock.allBlocksIsVisible();
    //table
    const blocksTitle = await blocksPage.blocksBlock.getBlocksTitle();

    //in table
    const blockTable = await blocksPage.blocksBlock.getBlocksTable();
    //Height
    const getTableBlockHeightRaw = (await blocksPage.blocksBlock.getTableBlockHeight());
    const getTableBlockHeight = getTableBlockHeightRaw ? getTableBlockHeightRaw.replace(/[$%\s]/g, '') : null;
    //time
    const getTableBlockRealTimeRaw = (await blocksPage.blocksBlock.getTableBlockRealTime());
    const getTableBlockRealTime = getTableBlockRealTimeRaw ? getTableBlockRealTimeRaw.replace(/[secondsago\s]/g, '') : null;
    //validator
    const getTableBlockValidator = await blocksPage.blocksBlock.getTableBlockValidator()
    //size
    const getTableBlockSizeRaw = (await blocksPage.blocksBlock.getTableBlockSize());
    const getTableBlockSize = getTableBlockSizeRaw ? getTableBlockSizeRaw.replace(" bytes", "") : null;
    //transactions
    const getTableTransactionCount = await blocksPage.blocksBlock.getTableTransactionCount();
    const getTableGasUsed = await blocksPage.blocksBlock.getTableGasUsed();
    //gas percent
    const getTableGasUsedPercentRaw = await blocksPage.blocksBlock.getTableGasUsedPercent()
    const getTableGasUsedPercent = getTableGasUsedPercentRaw ? getTableGasUsedPercentRaw.replace(/[$%\s]/g, '') : null;
    //Gas limit
    const getTableGasLimitRaw = await blocksPage.blocksBlock.getTableGasLimit()
    const getTableGasLimit = getTableGasLimitRaw ? getTableGasLimitRaw.replace(/[$%\s]/g, '') : null;
    //True Gas percent
    const trueGasPercent = (Number(getTableGasUsed) === 0) 
    ? 0 
    : (((Number(getTableGasLimit) / Number(getTableGasUsed)) * 100)*100)/100;
    //Base fee
    const getTableBaseFeeRaw = await blocksPage.blocksBlock.getTableBaseFee()
    const getTableBaseFee = getTableBaseFeeRaw ? getTableBaseFeeRaw.replace(/[$%\s]/g, '') : null;
    const getTableBaseFeeName = await blocksPage.blocksBlock.getTableBaseFeeName();
    //Validators count
    const getTableValidatorsCount = await blocksPage.blocksBlock.getTableValidatorsCount();
    //Rewards
    const getTableRewards = await blocksPage.blocksBlock.getTableRewards();
    const getTableRewardsName = await blocksPage.blocksBlock.getTableRewardsName();

    //Pagination
    const getPaginationToGoPage = await blocksPage.blocksBlock.getPaginationToGoPage();
    const getPaginationInput = await blocksPage.blocksBlock.getPaginationInput();
    const getPaginationOne = await blocksPage.blocksBlock.getPaginationOne();
    const getPaginationTwo = await blocksPage.blocksBlock.getPaginationTwo();
    const getPaginationThree = await blocksPage.blocksBlock.getPaginationThree();
    const getPaginationFour = await blocksPage.blocksBlock.getPaginationFour();
    const getPaginationFive = await blocksPage.blocksBlock.getPaginationFive();
    const getPaginationEtc = await blocksPage.blocksBlock.getPaginationEtc();
    const getPaginationLast = await blocksPage.blocksBlock.getPaginationLast();
    //table

    //expect(allBlocks).toBeEnabled();

    expect(blocksTitle).toContain('Blocks');
    expect(blockTable).toContain('Block');
    expect(blockTable).toContain('Time');
    expect(blockTable).toContain('Proposer');
    expect(blockTable).toContain('Size');
    expect(blockTable).toContain('Transactions');
    expect(blockTable).toContain('Gas used');
    expect(blockTable).toContain('Gas limit');
    expect(blockTable).toContain('Base fee');
    expect(blockTable).toContain('Validators');
    expect(blockTable).toContain('Rewards');
    //in table
    //Height
    expect(Number(getTableBlockHeight)).toBeGreaterThanOrEqual(5559656);
    //time
    expect(Number(getTableBlockRealTime)).toBeGreaterThan(5);
    expect(Number(getTableBlockRealTime)).toBeLessThan(20);
    //validator
    expect(getTableBlockValidator).toContain('validator');
    //size
    expect(Number(getTableBlockSize)).toBeGreaterThan(700);
    //transactions
    expect(Number(getTableTransactionCount)).toBeGreaterThanOrEqual(0);
    //gas percent
    expect(Number(getTableGasUsed)).toBeGreaterThanOrEqual(0);
    expect(Number(getTableGasUsedPercent)).toEqual(trueGasPercent);
    //Gas limit
    expect(Number(getTableGasLimit)).toBeGreaterThanOrEqual(20000000);
    //Base fee
    expect(Number(getTableBaseFee)).toEqual(0.0000005);
    expect(getTableBaseFeeName).toContain('XFI');
    //Validators count
    expect(Number(getTableValidatorsCount)).toEqual(2);
    //Rewards
    expect(Number(getTableRewards)).toEqual(5);
    expect(getTableRewardsName).toContain('XFI');

    //Pagination
    expect(getPaginationToGoPage).toContain('Go to');
    expect(getPaginationToGoPage).toContain('page');
    expect(getPaginationOne).toContain('1');
    expect(getPaginationTwo).toContain('2');
    expect(getPaginationThree).toContain('3');
    expect(getPaginationFour).toContain('4');
    expect(getPaginationFive).toContain('5');
    expect(getPaginationEtc).toContain('. . .');
    expect(Number(getPaginationLast)).toBeGreaterThanOrEqual(283412);

    await getPaginationInput.fill(`123`);
    await getPaginationInput.press('Enter');
    await blocksPage.blocksBlock.getUrl();
    

    //nextPage
    const getRefreshButton = await blocksPage.blocksBlock.getRefreshButton();

    expect(getRefreshButton).toContain('Refresh');

    //await blocksPage.blocksBlock.getUrl()
  });
  test.skip('check block detail page (information)', async () => {
    
    const allBlocks = await blocksPage.blocksBlock.allBlocksIsVisible();



  });//*[@id="__next"]//table/tbody/tr[1]/td[1]/div
})