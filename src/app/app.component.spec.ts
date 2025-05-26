import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { DrawerComponent } from './components/layout/drawer/drawer.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MenuIconComponent } from './components/icons/menu-icon.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

describe('AppComponent', () => {
  it('アプリが正しくレンダリングされること', async () => {
    // コンポーネントをレンダリング
    await render(AppComponent, {
      imports: [
        LayoutComponent,
        HeaderComponent,
        DrawerComponent,
        FooterComponent,
        MenuIconComponent,
      ],
      providers: [provideRouter(routes)],
    });

    // アプリレイアウトが正しくレンダリングされていることを確認
    const layoutElement = screen.getByRole('main');
    expect(layoutElement).toBeTruthy();

    // ヘッダー内にタイトルが表示されていることを確認
    const titleElement = screen.getByText('template-angular-19');
    expect(titleElement).toBeTruthy();
  });
});
