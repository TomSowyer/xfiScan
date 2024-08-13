import { test, expect } from '@playwright/test';
import { baseUrl, devPass } from '../../consts/dashboardConst';

test.beforeEach(async ({ page }) => {
  await page.goto(baseUrl.MAIN);
 
});

  test('Screens testing', async ({page}) => {
    //await page.goto(baseUrl);
    await expect(page.getByTestId('button-test-id')).toBeVisible();
    await expect(page).toHaveScreenshot("devModPage.png", { fullPage: true, animations: "disabled", timeout: 2000, maxDiffPixels: 200 });
    //dev mode
    await expect(page.locator('[placeholder="Password"]')).toBeVisible();
    await page.locator('[placeholder="Password"]').fill(devPass);
    //skip dev mode
    await expect(page.getByTestId('button-test-id')).toBeVisible();
    await page.getByTestId('button-test-id').click()
    //header block
    await expect(page.getByText('Main pageMainnetTestnet')).toBeVisible();
    await expect(page.getByText('Main pageMainnetTestnet')).toHaveScreenshot("headerBlock.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 10
    });
    //footer
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toHaveScreenshot("footer.png", { animations: "disabled", timeout: 2000 });
    //navBar
    await expect(page.getByRole('complementary')).toBeVisible();
    await expect(page.getByRole('complementary')).toHaveScreenshot("navBar.png", { animations: "disabled", timeout: 2000 });
    //basic block
    await expect(page.getByText('Basic informationXFIPrice$0.')).toBeVisible();
    await expect(page.getByText('Basic informationXFIPrice$0.')).toHaveScreenshot("basicBlock.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 2000
    });
    //addreses block
    await expect(page.getByText('Validators/addressesMaximum')).toBeVisible();
    await expect(page.getByText('Validators/addressesMaximum')).toHaveScreenshot("addressesBlock.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 200
    });
    //coins block
    await expect(page.getByText('Native coins XFIIn')).toBeVisible();
    await expect(page.getByText('Native coins XFIIn')).toHaveScreenshot("coinsBlock.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 2000
    });
    //emission block
    await expect(page.getByText('XFI emissionMaximum')).toBeVisible();
    await expect(page.getByText('XFI emissionMaximum')).toHaveScreenshot("emissionBlock.png",{
      animations: "disabled",
      timeout: 2000,
      maxDiffPixels: 10
    });
})