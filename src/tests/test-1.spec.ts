import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.xfiscan.com/dashboard');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Gw1pqh5yxQ');
  await page.getByTestId('button-test-id').click();
  
  await expect(page.getByRole('main')).toContainText('Basic information');
  await expect(page.getByRole('main')).toContainText('XFI');
  await expect(page.getByRole('main')).toContainText('Price');
  await expect(page.getByRole('main')).toContainText('$0.614');
  await expect(page.getByRole('main')).toContainText('Market capitalization');
  await expect(page.getByRole('main')).toContainText('$84 137 786.15');
  await expect(page.getByRole('main')).toContainText('MPX');
  await expect(page.getByRole('main')).toContainText('$APR');
  await expect(page.getByRole('main')).toContainText('34 933.79%');
  await expect(page.getByRole('main')).toContainText('Blocks');
  await expect(page.getByRole('main')).toContainText('Creation time');
  await expect(page.getByRole('main')).toContainText('5 428 770');
  await expect(page.getByRole('main')).toContainText('5 seconds');
  await expect(page.getByRole('main')).toContainText('Transactions');
  await expect(page.getByRole('main')).toContainText('9 112');
  await expect(page.getByRole('main')).toContainText('Transactions per second');
  await expect(page.getByRole('main')).toContainText('0.0003356927');

  await page.getByRole('heading', { name: 'Maximum active validators' }).click();
  await expect(page.getByRole('main')).toContainText('Maximum active validators');
  await expect(page.getByRole('main')).toContainText('64');
  await expect(page.getByRole('main')).toContainText('Active validators');
  await expect(page.getByRole('main')).toContainText('2');
  await expect(page.getByRole('main')).toContainText('Inactive validators');
  await expect(page.getByRole('main')).toContainText('6');
  await expect(page.getByRole('main')).toContainText('Number of addresses');
  await expect(page.getByRole('main')).toContainText('3348');
});