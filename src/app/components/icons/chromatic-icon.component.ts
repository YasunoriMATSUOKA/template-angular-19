import { Component } from '@angular/core';

@Component({
  selector: 'app-chromatic-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      class="h-4 w-4"
    >
      <path
        fill="#F5C518"
        d="M0 400c0 220.91 179.09 400 400 400 220.91 0 400-179.09 400-400C800 179.09 620.91 0 400 0 179.09 0 0 179.09 0 400Z"
      />
      <path
        fill="#212121"
        d="M399.5 117.5 616.29 683h-433.6l216.81-565.5ZM399.5 236.6l-149 388.89h298.24L399.5 236.6Z"
      />
    </svg>
  `,
})
export class ChromaticIconComponent {}
