import { Component } from '@angular/core';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [],
  template: `
    <div class="container mx-auto prose">
      <h1>特定商取引法に関わる表示</h1>

      <h2>事業者</h2>
      <p>株式会社Proof of Your Life</p>

      <h2>代表者</h2>
      <p>代表取締役 松岡 靖典</p>

      <h2>所在地</h2>
      <p>
        〒150-0043<br />東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F−C
      </p>

      <h2>電話番号</h2>
      <p>080-8889-6138（受付時間：平日 10:00～18:00）</p>

      <h2>メールアドレス</h2>
      <p>support&#64;proof-of-your-life.io</p>

      <h2>販売価格</h2>
      <p>各商品、サービスページに記載</p>

      <h2>商品代金以外の必要料金</h2>
      <p>
        商品送料：全国一律500円（税込）<br />
        ※ただし、一部地域において追加料金が発生する場合がございます。
      </p>

      <h2>引き渡し時期</h2>
      <p>
        商品の場合、ご注文から2〜5営業日以内に発送<br />
        ※在庫状況によりお時間をいただく場合がございます。<br />
        サービスの場合、お支払いが確認でき次第ご利用いただけます。<br />
      </p>

      <h2>お支払い方法</h2>
      <p>クレジットカード決済（VISA, MasterCard, JCB, AMEX, Diners）</p>

      <h2>返品・交換</h2>
      <p>
        商品到着後7日以内にメールまたはお電話にてご連絡ください。<br />
        ※お客様都合による返品の場合は、返送料はお客様負担となります。<br />
        ※商品に欠陥がある場合は、弊社負担で返品・交換いたします。
      </p>
    </div>
  `,
  styles: [],
})
export class LegalComponent {}
