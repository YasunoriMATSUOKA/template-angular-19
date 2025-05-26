import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  template: `<app-layout [title]="title"></app-layout>`,
})
export class AppComponent {
  title = 'template-angular-19';
}
