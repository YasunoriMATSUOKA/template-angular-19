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
            これはAngular 19とTailwind
            CSSとdaisyUIとSupabaseを使用したテンプレートのホームページです。
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
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
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="特徴2"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">特徴2</h2>
            <p>Angular 19で実装</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
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
