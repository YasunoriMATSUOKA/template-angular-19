import { Component } from '@angular/core';

@Component({
  selector: 'app-vercel-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="h-4 w-4"
    >
      <path fill="#000000" d="M256 48l240 416H16L256 48z" />
    </svg>
  `,
})
export class VercelIconComponent {}
