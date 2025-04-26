import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DrawerComponent } from './drawer/drawer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, DrawerComponent],
  template: `
    <div class="drawer lg:drawer-open">
      <input id="app-drawer" type="checkbox" class="drawer-toggle" />

      <div class="drawer-content flex flex-col min-h-screen">
        <app-header [title]="title"></app-header>

        <main class="flex-grow">
          <router-outlet></router-outlet>
        </main>

        <app-footer></app-footer>
      </div>

      <div class="drawer-side z-[1000]">
        <label for="app-drawer" class="drawer-overlay"></label>
        <app-drawer></app-drawer>
      </div>
    </div>
  `,
  styles: [],
})
export class LayoutComponent {
  @Input()
  title = 'Template Angular 19';
}
