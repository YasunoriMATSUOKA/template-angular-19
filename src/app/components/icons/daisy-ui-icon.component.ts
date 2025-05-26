import { Component } from '@angular/core';

@Component({
  selector: 'app-daisy-ui-icon',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4">
      <path
        fill="#570df8"
        d="M5.255 5.786c.22-1.583 1.527-2.862 3.152-3.092A3.748 3.748 0 0112 5.25a3.748 3.748 0 013.594-2.556c1.624.23 2.932 1.51 3.15 3.092a3.745 3.745 0 01-1.143 3.373 3.745 3.745 0 011.143 3.373c-.22 1.583-1.527 2.862-3.15 3.092A3.748 3.748 0 0112 18.75a3.748 3.748 0 01-3.594 2.556c-1.624-.23-2.932-1.51-3.152-3.092a3.745 3.745 0 011.143-3.373 3.745 3.745 0 01-1.143-3.373"
      />
      <path fill="white" d="M12 8.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5" />
    </svg>
  `,
})
export class DaisyUiIconComponent {}
