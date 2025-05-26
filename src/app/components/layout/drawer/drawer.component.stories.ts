import type { Meta, StoryObj } from '@storybook/angular';
import { DrawerComponent } from './drawer.component';
import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeIconComponent } from '../../icons/home-icon.component';
import { PrivacyIconComponent } from '../../icons/privacy-icon.component';
import { TermsIconComponent } from '../../icons/terms-icon.component';
import { LegalIconComponent } from '../../icons/legal-icon.component';
import { GithubIconComponent } from '../../icons/github-icon.component';
import { AngularIconComponent } from '../../icons/angular-icon.component';
import { TailwindIconComponent } from '../../icons/tailwind-icon.component';
import { DaisyUiIconComponent } from '../../icons/daisy-ui-icon.component';
import { EslintIconComponent } from '../../icons/eslint-icon.component';
import { PrettierIconComponent } from '../../icons/prettier-icon.component';

const meta: Meta<DrawerComponent> = {
  title: 'Components/Layout/Drawer',
  component: DrawerComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        RouterTestingModule,
        HomeIconComponent,
        PrivacyIconComponent,
        TermsIconComponent,
        LegalIconComponent,
        GithubIconComponent,
        AngularIconComponent,
        TailwindIconComponent,
        DaisyUiIconComponent,
        EslintIconComponent,
        PrettierIconComponent,
      ],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<DrawerComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div class="max-w-lg max-h-[600px] overflow-y-auto border border-base-300 rounded-box">
        <app-drawer></app-drawer>
      </div>
    `,
    props: {},
  }),
};

export const MobilePreview: Story = {
  render: () => ({
    template: `
      <div class="w-80 h-[500px] border rounded-box overflow-hidden">
        <div class="bg-base-300 p-2 text-center text-xs">Mobile Drawer</div>
        <app-drawer></app-drawer>
      </div>
    `,
    props: {},
  }),
};

export const WithSelectedItem: Story = {
  render: () => ({
    template: `
      <div class="w-80 border border-base-300 rounded-box overflow-hidden">
        <div class="border-b border-base-300 p-2 text-center">Drawer with active item</div>
        <app-drawer></app-drawer>
      </div>
    `,
    props: {},
    // Note: In this example, we can't easily simulate an active route without configuring
    // the actual router, which would depend on app configuration
  }),
};
