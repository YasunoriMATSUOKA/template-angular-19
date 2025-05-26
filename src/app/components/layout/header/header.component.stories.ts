import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'Components/Layout/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {
    title: 'Template Angular 19',
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'カスタムタイトル',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'これは非常に長いタイトルです。レスポンシブ対応のテスト用です。',
  },
};
