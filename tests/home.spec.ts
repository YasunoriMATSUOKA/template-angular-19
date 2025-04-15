import { test, expect } from '@chromatic-com/playwright';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  const heading = page.getByRole('heading', {
    name: 'Welcome to template-angular-19',
  });

  await expect(heading).toBeVisible();
});
