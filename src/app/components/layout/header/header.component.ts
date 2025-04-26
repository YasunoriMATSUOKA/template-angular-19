import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar bg-base-100">
      <!-- ハンバーガーメニューボタン（モバイル用） -->
      <div class="navbar-start">
        <label
          for="app-drawer"
          class="btn btn-ghost lg:hidden"
          aria-label="メニュー"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>

      <!-- アプリタイトル -->
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl">App Title</a>
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
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li><a>プロフィール</a></li>
            <li><a>設定</a></li>
            <li><a>ログアウト</a></li>
          </ul>
        </div>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {}
