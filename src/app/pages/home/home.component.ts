import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="hero min-h-[50vh] bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">ホームページ</h1>
          <p class="py-6">
            これはAngular 19とdaisyUIを使用したテンプレートのホームページです。
            レスポンシブデザインのドロワーメニューとレイアウトを実装しています。
          </p>
          <button class="btn btn-primary">始める</button>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="特徴1"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">特徴1</h2>
            <p>レスポンシブデザイン採用のモダンUI</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="特徴2"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">特徴2</h2>
            <p>Angular 19の最新機能を活用</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="特徴3"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">特徴3</h2>
            <p>daisyUIコンポーネントによる優れたUI/UX</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent {}
