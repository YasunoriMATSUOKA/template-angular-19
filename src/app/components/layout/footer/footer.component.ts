import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
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
    <footer
      class="footer flex flex-col px-10 py-4 bg-base-200 text-base-content mt-auto"
    >
      <div class="w-full flex flex-col gap-1 lg:flex-row lg:justify-between">
        <nav>
          <h6 class="footer-title">リンク</h6>
          <div class="flex flex-row flex-wrap gap-4">
            <a routerLink="/" class="link link-hover flex items-center gap-1">
              <app-home-icon class="h-4 w-4"></app-home-icon>
              ホーム
            </a>
            <a
              routerLink="/privacy-policy"
              class="link link-hover flex items-center gap-1"
            >
              <app-privacy-icon class="h-4 w-4"></app-privacy-icon>
              プライバシーポリシー
            </a>
            <a
              routerLink="/terms-of-service"
              class="link link-hover flex items-center gap-1"
            >
              <app-terms-icon class="h-4 w-4"></app-terms-icon>
              利用規約
            </a>
            <a
              routerLink="/legal"
              class="link link-hover flex items-center gap-1"
            >
              <app-legal-icon class="h-4 w-4"></app-legal-icon>
              特定商取引法に関わる表示
            </a>
          </div>
        </nav>
      </div>

      <nav>
        <h6 class="footer-title">外部リンク</h6>
        <div class="flex flex-row flex-wrap gap-4">
          <a
            href="https://github.com/YasunoriMATSUOKA/template-angular-19"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-2"
          >
            <app-github-icon></app-github-icon>
            GitHub
          </a>
          <a
            href="https://angular.dev/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-angular-icon></app-angular-icon>
            Angular
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-tailwind-icon></app-tailwind-icon>
            Tailwind
          </a>
          <a
            href="https://daisyui.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-daisy-ui-icon></app-daisy-ui-icon>
            daisyUI
          </a>
          <a
            href="https://eslint.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-eslint-icon></app-eslint-icon>
            ESLint
          </a>
          <a
            href="https://prettier.io/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-prettier-icon></app-prettier-icon>
            Prettier
          </a>
          <a
            href="https://jasmine.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-jasmine-icon></app-jasmine-icon>
            Jasmine
          </a>
          <a
            href="https://karma-runner.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-karma-icon></app-karma-icon>
            Karma
          </a>
          <a
            href="https://storybook.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-storybook-icon></app-storybook-icon>
            Storybook
          </a>
          <a
            href="https://playwright.dev/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-playwright-icon></app-playwright-icon>
            Playwright
          </a>
          <a
            href="https://github.com/features/actions"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-github-actions-icon></app-github-actions-icon>
            GitHub Actions
          </a>
          <a
            href="https://www.chromatic.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-chromatic-icon></app-chromatic-icon>
            Chromatic
          </a>
          <a
            href="https://pages.cloudflare.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-cloudflare-pages-icon></app-cloudflare-pages-icon>
            Cloudflare Pages
          </a>
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-netlify-icon></app-netlify-icon>
            Netlify
          </a>
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover flex items-center gap-1"
          >
            <app-vercel-icon></app-vercel-icon>
            Vercel
          </a>
        </div>
      </nav>

      <div>
        <h6 class="footer-title">会社情報</h6>
        <p>
          <a href="https://proof-of-youf-life.io/" class="link"
            >Proof of Your Life</a
          >
        </p>
        <p>© 2025 - All rights reserved</p>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {}
