import { test, expect } from '@playwright/test';
import { baseUrl, devPass } from '../../consts/scanConst';
test.describe('Screenshot mainPage testing', async () =>{
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl.MAIN);
   
  });
  
    test('Main Dark mode page', async ({page}) => {
      //await page.goto(baseUrl);
      await expect(page.getByTestId('button-test-id')).toBeVisible();
      await expect(page).toHaveScreenshot("devModPage.png", { fullPage: true, animations: "disabled", timeout: 2000, maxDiffPixels: 25000 });
      //dev mode
      await expect(page.locator('[placeholder="Password"]')).toBeVisible();
      await page.locator('[placeholder="Password"]').fill(devPass);
      //skip dev mode
      await expect(page.getByTestId('button-test-id')).toBeVisible();
      await page.getByTestId('button-test-id').click()
      //header block
      await expect(page.getByText('Main pageMainnetTestnet')).toBeVisible();
      await expect(page.getByText('Main pageMainnetTestnet')).toHaveScreenshot("mainHeaderD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 200
      });
      //footer
      await expect(page.getByRole('contentinfo')).toBeVisible();
      await expect(page.getByRole('contentinfo')).toHaveScreenshot("mainFooterD.png", { animations: "disabled", timeout: 2000 });
      //navBar
      await expect(page.getByRole('complementary')).toBeVisible();
      await expect(page.getByRole('complementary')).toHaveScreenshot("mainNavBarD.png", { animations: "disabled", timeout: 2000 });
      //basic block
      await expect(page.getByText('Basic informationXFIPrice$0.')).toBeVisible();
      await expect(page.getByText('Basic informationXFIPrice$0.')).toHaveScreenshot("basicBlockD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 2000
      });
      //addreses block
      await expect(page.getByText('Validators/addressesMaximum')).toBeVisible();
      await expect(page.getByText('Validators/addressesMaximum')).toHaveScreenshot("addressesBlockD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 300
      });
      //coins block
      await expect(page.getByText('Native coins XFIIn')).toBeVisible();
      await expect(page.getByText('Native coins XFIIn')).toHaveScreenshot("coinsBlockD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 3500
      });
      //emission block
      await expect(page.getByText('XFI emissionMaximum')).toBeVisible();
      await expect(page.getByText('XFI emissionMaximum')).toHaveScreenshot("emissionBlockD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 10
      });
  });
  test('Main Light mode page', async ({page}) => {
    //await page.goto(baseUrl);
    await expect(page.getByTestId('button-test-id')).toBeVisible();
    await expect(page).toHaveScreenshot("devModPage.png", { fullPage: true, animations: "disabled", timeout: 2000, maxDiffPixels: 25000 });
    //dev mode
    await expect(page.locator('[placeholder="Password"]')).toBeVisible();
    await page.locator('[placeholder="Password"]').fill(devPass);
    //skip dev mode
    await expect(page.getByTestId('button-test-id')).toBeVisible();
    await page.getByTestId('button-test-id').click()
    //turn on light mode
    await expect(page.getByLabel('')).toBeVisible();
    await page.getByLabel('').check();
    await expect(page.getByLabel('')).toBeChecked();
    //header block
    await expect(page.getByText('Main pageMainnetTestnet')).toBeVisible();
    await expect(page.getByText('Main pageMainnetTestnet')).toHaveScreenshot("mainHeaderL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 3500
    });
    //footer
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toHaveScreenshot("mainFooterL.png", { animations: "disabled", timeout: 2000 });
    //navBar
    await expect(page.getByRole('complementary')).toBeVisible();
    await expect(page.getByRole('complementary')).toHaveScreenshot("mainNavBarL.png", { animations: "disabled", timeout: 2000 });
    //basic block
    await expect(page.getByText('Basic informationXFIPrice$0.')).toBeVisible();
    await expect(page.getByText('Basic informationXFIPrice$0.')).toHaveScreenshot("basicBlockL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 2000
    });
    //addreses block
    await expect(page.getByText('Validators/addressesMaximum')).toBeVisible();
    await expect(page.getByText('Validators/addressesMaximum')).toHaveScreenshot("addressesBlockL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 300
    });
    //coins block
    await expect(page.getByText('Native coins XFIIn')).toBeVisible();
    await expect(page.getByText('Native coins XFIIn')).toHaveScreenshot("coinsBlockL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 3500
    });
    //emission block
    await expect(page.getByText('XFI emissionMaximum')).toBeVisible();
    await expect(page.getByText('XFI emissionMaximum')).toHaveScreenshot("emissionBlockL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 10
    });
})
})
test.describe('Screenshot blockPage testing', async () =>{
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl.MAIN);
   
  });
  
    test('Blocks page Dark', async ({page}) => {
      //await page.goto(baseUrl);
      await expect(page.getByTestId('button-test-id')).toBeVisible();
      await expect(page).toHaveScreenshot("devModPage.png", { fullPage: true, animations: "disabled", timeout: 2000, maxDiffPixels: 25000 });
      //dev mode
      await expect(page.locator('[placeholder="Password"]')).toBeVisible();
      await page.locator('[placeholder="Password"]').fill(devPass);
      //skip dev mode
      await expect(page.getByTestId('button-test-id')).toBeVisible();
      await page.getByTestId('button-test-id').click()
      //go to blocks page
      await expect(page.getByRole('link', { name: 'Blocks' })).toBeVisible();
      await page.getByRole('link', { name: 'Blocks' }).click()
      //turn on light mode
      /* await expect(page.getByLabel('')).toBeVisible();
      await page.getByLabel('').check();
      await expect(page.getByLabel('')).toBeChecked(); */
      //header block
      await expect(page.getByText('BlocksMainnetTestnet')).toBeVisible();
      await expect(page.getByText('BlocksMainnetTestnet')).toHaveScreenshot("blockHeaderD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 200
      });
      //footer
      await expect(page.getByRole('contentinfo')).toBeVisible();
      await expect(page.getByRole('contentinfo')).toHaveScreenshot("blockFooterD.png", { animations: "disabled", timeout: 2000 });
      //navBar
      await expect(page.getByRole('complementary')).toBeVisible();
      await expect(page.getByRole('complementary')).toHaveScreenshot("blockNavBarD.png", { animations: "disabled", timeout: 2000 });
      //blocks block
      await expect(page.getByTestId('block-test-id')).toBeVisible();
      await expect(page.getByTestId('block-test-id')).toHaveScreenshot("blockBlockD.png",{
        animations: "disabled",
        timeout: 3000,
        maxDiffPixels: 40000
      });
      //go to block detail page
      await expect(page.locator('//*[@id="__next"]//main//div[2]//div[1]/table/tbody/tr[1]/td[1]//a/div')).toBeVisible();
      await page.locator('//*[@id="__next"]//main//div[2]//div[1]/table/tbody/tr[1]/td[1]//a/div').click();
      //block head
      await expect(page.getByTestId('heading-test-id')).toBeVisible();
      await expect(page.getByTestId('heading-test-id')).toHaveScreenshot("blockHeadBlockD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 250
      });
      //block tabs info
      await expect(page.getByRole('main').getByTestId('tabs-test-id')).toBeVisible();
      await expect(page.getByRole('main').getByTestId('tabs-test-id')).toHaveScreenshot("blockTabInfoBlockD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 1
      });
      //block info
      await expect(page.getByTestId('block-test-id')).toBeEnabled;
      await expect(page.getByTestId('block-test-id')).toHaveScreenshot("blockInfoBlockD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 2500
      });
      //go to block detail transaction
      await expect(page.getByRole('tab', { name: 'Transactions' })).toBeVisible();
      await page.getByRole('tab', { name: 'Transactions' }).click();
      //block tabs transaction
      await expect(page.getByRole('main').getByTestId('tabs-test-id')).toBeVisible();
      await expect(page.getByRole('main').getByTestId('tabs-test-id')).toHaveScreenshot("blockTabTransactionBlockD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 1
      });
      //block transaction
      await expect(page.getByTestId('block-test-id')).toBeVisible();
      await expect(page.getByTestId('block-test-id')).toHaveScreenshot("blockTransactionBlockD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 1
      });
      //go to block detail validators
      await expect(page.getByRole('tab', { name: 'Validators' })).toBeVisible();
      await page.getByRole('tab', { name: 'Validators' }).click();
      //block tabs transaction
      await expect(page.getByRole('main').getByTestId('tabs-test-id')).toBeVisible();
      await expect(page.getByRole('main').getByTestId('tabs-test-id')).toHaveScreenshot("blockTabValidatorsBlockD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 1
      });
      //block transaction
      await expect(page.getByTestId('block-test-id')).toBeVisible();
      await expect(page.getByTestId('block-test-id')).toHaveScreenshot("blockValidatorsBlockD.png",{
        animations: "disabled",
        timeout: 2000,
        maxDiffPixels: 1
      });
  });
  test('Blocks page Light', async ({page}) => {
    //await page.goto(baseUrl);
    await expect(page.getByTestId('button-test-id')).toBeVisible();
    await expect(page).toHaveScreenshot("devModPage.png", { fullPage: true, animations: "disabled", timeout: 2000, maxDiffPixels: 25000 });
    //dev mode
    await expect(page.locator('[placeholder="Password"]')).toBeVisible();
    await page.locator('[placeholder="Password"]').fill(devPass);
    //skip dev mode
    await expect(page.getByTestId('button-test-id')).toBeVisible();
    await page.getByTestId('button-test-id').click()
    //go to blocks page
    await expect(page.getByRole('link', { name: 'Blocks' })).toBeVisible();
    await page.getByRole('link', { name: 'Blocks' }).click()
    //turn on light mode
    await expect(page.getByLabel('')).toBeVisible();
    await page.getByLabel('').check();
    await expect(page.getByLabel('')).toBeChecked();
    //header block
    await expect(page.getByText('BlocksMainnetTestnet')).toBeVisible();
    await expect(page.getByText('BlocksMainnetTestnet')).toHaveScreenshot("blockHeaderL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 3500
    });
    //footer
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toHaveScreenshot("blockFooterL.png", { animations: "disabled", timeout: 2000 });
    //navBar
    await expect(page.getByRole('complementary')).toBeVisible();
    await expect(page.getByRole('complementary')).toHaveScreenshot("blockNavBarL.png", { animations: "disabled", timeout: 2000 });
    //blocks block
    await expect(page.getByTestId('block-test-id')).toBeVisible();
    await expect(page.getByTestId('block-test-id')).toHaveScreenshot("blockBlockL.png",{
      animations: "disabled",
      timeout: 3000,
      maxDiffPixels: 40000
    });
    //go to block detail page
    await expect(page.locator('//*[@id="__next"]//main//div[2]//div[1]/table/tbody/tr[1]/td[1]//a/div')).toBeVisible();
    await page.locator('//*[@id="__next"]//main//div[2]//div[1]/table/tbody/tr[1]/td[1]//a/div').click();
    //block head
    await expect(page.getByTestId('heading-test-id')).toBeVisible();
    await expect(page.getByTestId('heading-test-id')).toHaveScreenshot("blockHeadBlockL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 250
    });
    //block tabs info
    await expect(page.getByRole('main').getByTestId('tabs-test-id')).toBeVisible();
    await expect(page.getByRole('main').getByTestId('tabs-test-id')).toHaveScreenshot("blockTabInfoBlockL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 1
    });
    //block info
    await expect(page.getByTestId('block-test-id')).toBeEnabled;
    await expect(page.getByTestId('block-test-id')).toHaveScreenshot("blockInfoBlockL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 2500
    });
    //go to block detail transaction
    await expect(page.getByRole('tab', { name: 'Transactions' })).toBeVisible();
    await page.getByRole('tab', { name: 'Transactions' }).click();
    //block tabs transaction
    await expect(page.getByRole('main').getByTestId('tabs-test-id')).toBeVisible();
    await expect(page.getByRole('main').getByTestId('tabs-test-id')).toHaveScreenshot("blockTabTransactionBlockL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 1
    });
    //block transaction
    await expect(page.getByTestId('block-test-id')).toBeVisible();
    await expect(page.getByTestId('block-test-id')).toHaveScreenshot("blockTransactionBlockL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 1000
    });
    //go to block detail validators
    await expect(page.getByRole('tab', { name: 'Validators' })).toBeVisible();
    await page.getByRole('tab', { name: 'Validators' }).click();
    //block tabs transaction
    await expect(page.getByRole('main').getByTestId('tabs-test-id')).toBeVisible();
    await expect(page.getByRole('main').getByTestId('tabs-test-id')).toHaveScreenshot("blockTabValidatorsBlockL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 1
    });
    //block transaction
    await expect(page.getByTestId('block-test-id')).toBeVisible();
    await expect(page.getByTestId('block-test-id')).toHaveScreenshot("blockValidatorsBlockL.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 1
    });
});
  
})
