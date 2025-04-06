import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('アプリが正しくレンダリングされ、タイトルが表示されること', async () => {
    // コンポーネントをレンダリング
    await render(AppComponent);

    // h1要素内にアプリのタイトルが含まれているか確認
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('Welcome to template-angular-19');
  });
});
