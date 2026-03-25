import { test, expect } from '@playwright/test';

test('EPAM - Explore Our Client Work displays Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/');
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Client Work')).toBeVisible();
});
