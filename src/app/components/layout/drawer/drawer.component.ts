import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
import { JasmineIconComponent } from '../../icons/jasmine-icon.component';
import { KarmaIconComponent } from '../../icons/karma-icon.component';
import { StorybookIconComponent } from '../../icons/storybook-icon.component';
import { PlaywrightIconComponent } from '../../icons/playwright-icon.component';
import { GithubActionsIconComponent } from '../../icons/github-actions-icon.component';
import { ChromaticIconComponent } from '../../icons/chromatic-icon.component';
import { CloudflarePagesIconComponent } from '../../icons/cloudflare-pages-icon.component';
import { NetlifyIconComponent } from '../../icons/netlify-icon.component';
import { VercelIconComponent } from '../../icons/vercel-icon.component';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
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
    JasmineIconComponent,
    KarmaIconComponent,
    StorybookIconComponent,
    PlaywrightIconComponent,
    GithubActionsIconComponent,
    ChromaticIconComponent,
    CloudflarePagesIconComponent,
    NetlifyIconComponent,
    VercelIconComponent,
  ],
  template: `
    <aside class="bg-base-200 w-80 h-screen overflow-y-auto">
      <!-- アプリロゴ -->
      <div class="sticky top-0 z-10 flex justify-center bg-base-200">
        <img
          src="https://angular.io/assets/images/logos/angular/angular.svg"
          alt="Angular Logo"
          width="80"
          height="80"
        />
      </div>

      <!-- メニューリスト -->
      <div class="menu">
        <div class="mb-6">
          <h2 class="menu-title">メニュー</h2>
          <ul>
            <li>
              <a
                routerLink="/"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                <app-home-icon></app-home-icon>
                ホーム
              </a>
            </li>
            <li>
              <a routerLink="/privacy-policy" routerLinkActive="active">
                <app-privacy-icon></app-privacy-icon>
                プライバシーポリシー
              </a>
            </li>
            <li>
              <a routerLink="/terms-of-service" routerLinkActive="active">
                <app-terms-icon></app-terms-icon>
                利用規約
              </a>
            </li>
            <li>
              <a routerLink="/legal" routerLinkActive="active">
                <app-legal-icon></app-legal-icon>
                特定商取引法に関わる表示
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="menu-title">外部リンク</h2>
          <ul>
            <li>
              <a
                href="https://github.com/YasunoriMATSUOKA/template-angular-19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <app-github-icon></app-github-icon>
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://angular.dev/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-angular-icon></app-angular-icon>
                Angular
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-tailwind-icon></app-tailwind-icon>
                Tailwind
              </a>
            </li>
            <li>
              <a
                href="https://daisyui.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-daisy-ui-icon></app-daisy-ui-icon>
                daisyUI
              </a>
            </li>
            <li>
              <a
                href="https://eslint.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-eslint-icon></app-eslint-icon>
                ESLint
              </a>
            </li>
            <li>
              <a
                href="https://prettier.io/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-prettier-icon></app-prettier-icon>
                Prettier
              </a>
            </li>
            <li>
              <a
                href="https://jasmine.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-jasmine-icon></app-jasmine-icon>
                Jasmine
              </a>
            </li>
            <li>
              <a
                href="https://karma-runner.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-karma-icon></app-karma-icon>
                Karma
              </a>
            </li>
            <li>
              <a
                href="https://storybook.js.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-storybook-icon></app-storybook-icon>
                Storybook
              </a>
            </li>
            <li>
              <a
                href="https://playwright.dev/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-playwright-icon></app-playwright-icon>
                Playwright
              </a>
            </li>
            <li>
              <a
                href="https://github.com/features/actions"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-github-actions-icon></app-github-actions-icon>
                GitHub Actions
              </a>
            </li>
            <li>
              <a
                href="https://www.chromatic.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-chromatic-icon></app-chromatic-icon>
                Chromatic
              </a>
            </li>
            <li>
              <a
                href="https://pages.cloudflare.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-cloudflare-pages-icon></app-cloudflare-pages-icon>
                Cloudflare Pages
              </a>
            </li>
            <li>
              <a
                href="https://www.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-netlify-icon></app-netlify-icon>
                Netlify
              </a>
            </li>
            <li>
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2"
              >
                <app-vercel-icon></app-vercel-icon>
                Vercel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  `,
})
export class DrawerComponent {}
