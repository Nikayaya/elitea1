import { test, expect } from '@playwright/test';

test('EPAM: Explore Our Client Work shows Client Work text', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'networkidle' });
  await page.waitForSelector('text=Services', { timeout: 10000 });
  await page.click('text=Services');
  await page.waitForTimeout(500);
  await page.click('text=Explore Our Client Work');
  await expect(page.locator('text=Client Work')).toBeVisible({ timeout: 10000 });
});