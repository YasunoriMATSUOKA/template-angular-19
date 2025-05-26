import { expect, test } from '@playwright/test';

test.describe('Layout Components', () => {
  test.beforeEach(async ({ page }) => {
    // トップページに移動
    await page.goto('/');
  });

  test('should display sticky header correctly', async ({ page }) => {
    // ヘッダーが存在することを確認
    const header = page.locator('app-header');
    await expect(header).toBeVisible();

    // stickyヘッダーであることを確認（CSSプロパティをチェック）
    const headerStyles = await page.evaluate(() => {
      const header = document.querySelector('app-header header');
      if (!header) return null;
      const styles = window.getComputedStyle(header);
      return {
        position: styles.position,
        backgroundColor: styles.backgroundColor,
        zIndex: styles.zIndex,
      };
    });

    expect(headerStyles?.position).toBe('sticky');
    expect(headerStyles?.zIndex).not.toBe('auto');

    // アプリケーションタイトルが表示されていることを確認
    const title = page.locator('app-header .navbar-center a');
    await expect(title).toBeVisible();
    await expect(title).toHaveText(/Template Angular 19/);
  });

  test('should display avatar menu in header', async ({ page }) => {
    // アバターメニューボタンが存在することを確認
    const avatarButton = page.locator('app-header .avatar');
    await expect(avatarButton).toBeVisible();

    // クリックしてドロップダウンを表示
    await avatarButton.click();

    // ドロップダウンメニューが表示されることを確認
    const dropdown = page.locator('app-header .dropdown-content');
    await expect(dropdown).toBeVisible();

    // メニュー項目が表示されていることを確認
    const menuItems = page.locator('app-header .dropdown-content li');
    await expect(menuItems).toHaveCount(3);
  });

  test('should display drawer when menu button clicked on mobile', async ({
    page,
  }) => {
    // ビューポートをモバイルサイズに設定
    await page.setViewportSize({ width: 640, height: 800 });

    // ハンバーガーメニューボタンが表示されることを確認
    const menuButton = page.locator('app-header label[for="app-drawer"]');
    await expect(menuButton).toBeVisible();

    // デフォルトではドロワーは非表示または閉じた状態
    const drawerCheckbox = page.locator('#app-drawer');
    await expect(drawerCheckbox).toBeHidden(); // checkboxは非表示
    await expect(drawerCheckbox).not.toBeChecked(); // チェックされていない状態

    // メニューボタンをクリックしてドロワーを開く
    await menuButton.click();

    // ドロワーが開くことを確認（checkboxがチェックされる）
    await expect(drawerCheckbox).toBeChecked();

    // ドロワー内にAngularロゴが表示されることを確認
    const logo = page.locator('app-drawer img[alt="Angular Logo"]');
    await expect(logo).toBeVisible();
  });

  test('should display footer at bottom of page', async ({ page }) => {
    // フッターが存在することを確認
    const footer = page.locator('app-footer');
    await expect(footer).toBeVisible();

    // フッター内に「リンク」セクションがあることを確認
    const linkSection = page.locator(
      'app-footer h6.footer-title:has-text("リンク")',
    );
    await expect(linkSection).toBeVisible();

    // フッター内に「外部リンク」セクションがあることを確認
    const externalLinkSection = page.locator(
      'app-footer h6.footer-title:has-text("外部リンク")',
    );
    await expect(externalLinkSection).toBeVisible();

    // 著作権表示があることを確認
    const copyright = page.locator('app-footer:has-text("© 2025")');
    await expect(copyright).toBeVisible();
  });

  // レスポンシブ対応のテスト
  test('should have responsive layout', async ({ page }) => {
    // デスクトップサイズでドロワーが常に表示されることを確認
    await page.setViewportSize({ width: 1280, height: 800 });

    // ハンバーガーメニューボタンが非表示であることを確認
    const menuButton = page.locator('app-header label[for="app-drawer"]');
    await expect(menuButton).toBeHidden();

    // ドロワーが表示されていることを確認
    const drawer = page.locator('app-drawer');
    await expect(drawer).toBeVisible();

    // モバイルサイズでハンバーガーメニューが表示されることを確認
    await page.setViewportSize({ width: 640, height: 800 });

    // ハンバーガーメニューボタンが表示されることを確認
    await expect(menuButton).toBeVisible();
  });
});
