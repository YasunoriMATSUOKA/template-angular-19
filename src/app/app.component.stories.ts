import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';

// AppComponentのメタ情報を設定
const meta: Meta<AppComponent> = {
  title: 'App/AppComponent',
  component: AppComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [RouterOutlet],
    }),
  ],
  // router-outletを扱うためのパラメータがある場合は追加
};

export default meta;
type Story = StoryObj<AppComponent>;

// デフォルトのストーリー
export const Default: Story = {
  args: {
    title: 'template-angular-19',
  },
};

// タイトルを変更したバージョン
export const CustomTitle: Story = {
  args: {
    title: 'カスタムタイトル',
  },
};

// 長いタイトルのバージョン
export const LongTitle: Story = {
  args: {
    title: 'これは非常に長いタイトルです - Storybookのテスト用',
  },
};
