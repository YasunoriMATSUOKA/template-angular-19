import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeIconComponent } from '../../icons/home-icon.component';
import { PrivacyIconComponent } from '../../icons/privacy-icon.component';
import { TermsIconComponent } from '../../icons/terms-icon.component';
import { LegalIconComponent } from '../../icons/legal-icon.component';
import { GithubIconComponent } from '../../icons/github-icon.component';

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
  ],
  template: `
    <aside class="menu bg-base-200 w-80 h-screen">
      <!-- アプリロゴ -->
      <div class="p-4 flex justify-center">
        <img
          src="https://angular.io/assets/images/logos/angular/angular.svg"
          alt="Angular Logo"
          width="100"
          height="100"
        />
      </div>

      <!-- メニューリスト -->
      <ul class="menu p-4">
        <li>
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
        </li>

        <li class="mt-4">
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
          </ul>
        </li>
      </ul>
    </aside>
  `,
})
export class DrawerComponent {}
