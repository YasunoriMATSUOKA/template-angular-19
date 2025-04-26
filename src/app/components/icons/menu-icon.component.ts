import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [class]="class"
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
  `,
})
export class MenuIconComponent {
  @Input()
  class = 'h-5 w-5';
}
