import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.xfiscan.com/dashboard');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Gw1pqh5yxQ');
  await page.getByTestId('button-test-id').click();
  await page.getByRole('link', { name: 'Blocks' }).click();
  await page.getByTestId('block-test-id').click();
  
  await expect(page.getByTestId('block-title-test-id').getByRole('heading')).toContainText('Blocks');
  await expect(page.locator('thead')).toContainText('Block');
  await expect(page.locator('thead')).toContainText('Time');
  await expect(page.locator('thead')).toContainText('Proposer');

  await expect(page.locator('thead')).toContainText('Size');
  await expect(page.locator('thead')).toContainText('Transactions');
  await expect(page.locator('thead')).toContainText('Gas used');
  await expect(page.locator('thead')).toContainText('Gas limit');
  await expect(page.locator('thead')).toContainText('Base fee');
  await expect(page.locator('thead')).toContainText('Validators');
  await expect(page.locator('thead')).toContainText('Rewards');
  await expect(page.locator('tbody')).toContainText('5 559 0119 seconds ago');
  await expect(page.locator('tbody')).toContainText('5 seconds');
  await expect(page.locator('tbody')).toContainText('validator4');
  await expect(page.locator('tbody')).toContainText('711 bytes');
  await expect(page.locator('tbody')).toContainText('0');
  await expect(page.locator('tbody')).toContainText('0');
  await expect(page.locator('tbody')).toContainText('0 %');
  await expect(page.locator('tbody')).toContainText('20 000 000');
  await expect(page.locator('tbody')).toContainText('0.0000005');
  await expect(page.locator('tbody')).toContainText('XFI');
  await expect(page.locator('tbody')).toContainText('2');
  await expect(page.locator('tbody')).toContainText('5');
  await expect(page.locator('tbody')).toContainText('XFI');
  
  await expect(page.getByTestId('input-pagination-container-test-id')).toContainText('Go to');
  await expect(page.getByTestId('input-pagination-test-id').getByRole('textbox')).toBeEmpty();
  await expect(page.getByTestId('input-pagination-container-test-id')).toContainText('page');
  await expect(page.getByLabel('page 1')).toContainText('1');
  await expect(page.getByLabel('Go to page 2', { exact: true })).toContainText('2');
  await expect(page.getByLabel('Go to page 3')).toContainText('3');
  await expect(page.getByLabel('Go to page 4')).toContainText('4');
  await expect(page.getByLabel('Go to page 5')).toContainText('5');
  await expect(page.getByTestId('pagination-default-test-id').getByRole('heading')).toContainText('. . .');
  await expect(page.getByLabel('Go to page 277952').getByRole('paragraph')).toContainText('277952');

  await page.getByRole('link', { name: '559 039' }).click();
  await page.getByTestId('block-test-id').click();

  await expect(page.getByTestId('back-button-test-id').getByRole('paragraph')).toContainText('Back');
  await expect(page.getByTestId('heading-test-id')).toContainText('Block');
  await expect(page.getByTestId('heading-test-id')).toContainText('5 559 039');

  await expect(page.getByRole('main')).toContainText('Information');
  await expect(page.getByRole('main')).toContainText('Transactions');
  await expect(page.getByTestId('tab-test-id-3')).toContainText('Validators');

  await expect(page.getByTestId('block-title-test-id').getByRole('heading')).toContainText('Block information');
  await expect(page.getByTestId('list-test-id')).toContainText('Block');
  await expect(page.getByTestId('string-test-id').locator('span')).toContainText('5 559 039');
  await expect(page.getByTestId('list-test-id')).toContainText('Date');
  await expect(page.getByTestId('list-test-id')).toContainText('11 seconds ago (August 21, 2024 15:26:55)');
  await expect(page.getByTestId('list-test-id')).toContainText('Time');
  await expect(page.getByTestId('list-test-id')).toContainText('5 seconds');
  await expect(page.getByTestId('list-test-id')).toContainText('Proposer');
  await expect(page.getByTestId('list-test-id').getByRole('link')).toContainText('validator1');
  await expect(page.getByTestId('list-test-id')).toContainText('Size');
  await expect(page.getByTestId('list-test-id')).toContainText('714 bytes');
  await expect(page.getByTestId('list-test-id')).toContainText('Transactions');
  await expect(page.getByTestId('list-test-id')).toContainText('0');
  await expect(page.getByTestId('list-test-id')).toContainText('Gas used');
  await expect(page.getByTestId('list-test-id')).toContainText('0');
  await expect(page.getByTestId('list-test-id')).toContainText('0 %');
  await expect(page.getByTestId('list-test-id')).toContainText('Gas limit');
  await expect(page.getByTestId('list-test-id')).toContainText('20 000 000');
  await expect(page.getByTestId('list-test-id')).toContainText('Base fee');
  await expect(page.getByTestId('list-test-id')).toContainText('0.0000005');
  await expect(page.getByTestId('list-test-id')).toContainText('XFI');
  await expect(page.getByTestId('list-test-id')).toContainText('Validators');
  await expect(page.getByTestId('list-test-id')).toContainText('2');
  await expect(page.getByTestId('list-test-id')).toContainText('Rewards');
  await expect(page.getByTestId('list-test-id')).toContainText('5');
  await expect(page.getByTestId('list-test-id')).toContainText('XFI');

  await page.getByRole('tab', { name: 'Transactions' }).click();
  await expect(page.getByTestId('block-title-test-id').getByRole('heading')).toContainText('Transactions');
  await expect(page.getByTestId('not-found-test-id')).toContainText('Nothing found');
  await expect(page.getByTestId('not-found-test-id')).toContainText('Nothing found');
  await page.getByTestId('tab-test-id-3').click();
  await expect(page.getByTestId('block-title-test-id').getByRole('heading')).toContainText('Validators');
  await expect(page.locator('thead')).toContainText('Validator');
  await expect(page.locator('thead')).toContainText('Signed');
  await expect(page.locator('thead')).toContainText('Power');
  await expect(page.locator('thead')).toContainText('General stake');
  await expect(page.locator('thead')).toContainText('Commission');
  await expect(page.locator('thead')).toContainText('Delegators');
  await expect(page.locator('tbody')).toContainText('validator1');
  await expect(page.getByLabel('Copy address').getByRole('paragraph')).toContainText('mxvaloper1nwv...');
  await expect(page.locator('tbody')).toContainText('61.87%');
  await expect(page.locator('tbody')).toContainText('38.12%');
});