import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuIconComponent } from '../../icons/menu-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuIconComponent],
  template: `
    <header class="navbar bg-base-300 text-base-content top-0 z-[1000]">
      <!-- ハンバーガーメニューボタン（モバイル用） -->
      <div class="navbar-start">
        <label
          for="app-drawer"
          class="btn btn-ghost lg:hidden"
          aria-label="メニュー"
        >
          <app-menu-icon></app-menu-icon>
        </label>
      </div>

      <!-- アプリタイトル -->
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl text-base-content">{{ title }}</a>
      </div>

      <!-- アバターメニュー -->
      <div class="navbar-end">
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="ユーザーアバター"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 text-neutral rounded-box w-52"
          >
            <li><a class="hover:text-primary">プロフィール</a></li>
            <li><a class="hover:text-primary">設定</a></li>
            <li><a class="hover:text-primary">ログアウト</a></li>
          </ul>
        </div>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  @Input()
  title = 'Template Angular 19';
}
