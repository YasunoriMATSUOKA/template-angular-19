import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<FooterComponent> = {
  title: 'Components/Layout/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const Default: Story = {
  args: {},
};

export const WithCustomBackground: Story = {
  render: () => ({
    template: `
      <div class="bg-base-200 min-h-screen flex flex-col">
        <div class="flex-grow"></div>
        <app-footer></app-footer>
      </div>
    `,
    props: {},
  }),
};

export const WithContent: Story = {
  render: () => ({
    template: `
      <div class="min-h-screen flex flex-col">
        <div class="flex-grow p-4">
          <h1 class="text-2xl font-bold mb-4">ページコンテンツ</h1>
          <p class="mb-2">これはフッターがページ最下部に固定されているかテストするためのコンテンツです。</p>
          <p class="mb-2">フッターは常にコンテンツの下、もしくは画面の最下部に表示されるべきです。</p>
          <p>スクロールした場合にもフッターが適切に表示されることを確認してください。</p>
        </div>
        <app-footer></app-footer>
      </div>
    `,
    props: {},
  }),
};
