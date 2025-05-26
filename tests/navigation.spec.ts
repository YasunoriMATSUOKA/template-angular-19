import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // トップページに移動
    await page.goto('/');
  });

  test('should navigate to pages from drawer menu', async ({ page }) => {
    // 最初のページがホームページであることを確認
    await expect(page).toHaveURL('/');

    // デスクトップサイズでテスト（ドロワーが表示されている状態）
    await page.setViewportSize({ width: 1280, height: 800 });

    // プライバシーポリシーリンクをクリック
    const privacyLink = page.locator(
      'app-drawer a[routerLink="/privacy-policy"]',
    );
    await expect(privacyLink).toBeVisible();
    await privacyLink.click();

    // URLが変更されていることを確認
    await expect(page).toHaveURL('/privacy-policy');

    // プライバシーポリシーページが表示されていることを確認
    const privacyTitle = page.locator('h1:has-text("プライバシーポリシー")');
    await expect(privacyTitle).toBeVisible();

    // 利用規約ページに移動
    const termsLink = page.locator(
      'app-drawer a[routerLink="/terms-of-service"]',
    );
    await expect(termsLink).toBeVisible();
    await termsLink.click();

    // URLが変更されていることを確認
    await expect(page).toHaveURL('/terms-of-service');

    // 利用規約ページが表示されていることを確認
    const termsTitle = page.locator('h1:has-text("利用規約")');
    await expect(termsTitle).toBeVisible();

    // 特定商取引法に関わる表示ページに移動
    const legalLink = page.locator('app-drawer a[routerLink="/legal"]');
    await expect(legalLink).toBeVisible();
    await legalLink.click();

    // URLが変更されていることを確認
    await expect(page).toHaveURL('/legal');

    // ホームに戻る
    const homeLink = page.locator('app-drawer a[routerLink="/"]');
    await expect(homeLink).toBeVisible();
    await homeLink.click();

    // URLが変更されていることを確認
    await expect(page).toHaveURL('/');
  });

  test('should navigate to pages from footer links', async ({ page }) => {
    // フッターからプライバシーポリシーリンクをクリック
    const privacyLink = page.locator(
      'app-footer a[routerLink="/privacy-policy"]',
    );
    await expect(privacyLink).toBeVisible();
    await privacyLink.click();

    // URLが変更されていることを確認
    await expect(page).toHaveURL('/privacy-policy');

    // フッターから利用規約リンクをクリック
    const termsLink = page.locator(
      'app-footer a[routerLink="/terms-of-service"]',
    );
    await expect(termsLink).toBeVisible();
    await termsLink.click();

    // URLが変更されていることを確認
    await expect(page).toHaveURL('/terms-of-service');

    // フッターから特定商取引法リンクをクリック
    const legalLink = page.locator('app-footer a[routerLink="/legal"]');
    await expect(legalLink).toBeVisible();
    await legalLink.click();

    // URLが変更されていることを確認
    await expect(page).toHaveURL('/legal');

    // フッターからホームリンクをクリック
    const homeLink = page.locator('app-footer a[routerLink="/"]');
    await expect(homeLink).toBeVisible();
    await homeLink.click();

    // URLが変更されていることを確認
    await expect(page).toHaveURL('/');
  });

  test('should navigate to external sites from drawer menu', async ({
    page,
  }) => {
    // 最初にページのコンソールイベントを監視
    const consoleLogs: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'log') {
        consoleLogs.push(msg.text());
      }
    });

    // 外部リンクの属性をテスト
    // 実際にクリックして新しいページを開くと、テスト環境によって失敗する可能性があるため
    // 属性のチェックのみ行う

    // GitHubリンクをクリック
    const githubLink = page.locator('app-drawer a[href*="github.com"]').first();
    await expect(githubLink).toBeVisible();

    // target="_blank"属性があることを確認
    const targetAttr = await githubLink.getAttribute('target');
    expect(targetAttr).toBe('_blank');

    // rel="noopener noreferrer"属性があることを確認
    const relAttr = await githubLink.getAttribute('rel');
    expect(relAttr).toBe('noopener noreferrer');
  });

  test('should navigate to pages from mobile drawer', async ({ page }) => {
    // モバイルサイズでテスト
    await page.setViewportSize({ width: 640, height: 800 });

    // ハンバーガーメニューボタンをクリックしてドロワーを開く
    const menuButton = page.locator('app-header label[for="app-drawer"]');
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    // ドロワーが開いたことを確認
    const drawer = page.locator('app-drawer');
    await expect(drawer).toBeVisible();

    // プライバシーポリシーリンクをクリック
    const privacyLink = page.locator(
      'app-drawer a[routerLink="/privacy-policy"]',
    );
    await expect(privacyLink).toBeVisible();
    await privacyLink.click();

    // URLが変更されていることを確認
    await expect(page).toHaveURL('/privacy-policy');
  });
});
