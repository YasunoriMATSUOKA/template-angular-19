import { Component } from '@angular/core';

@Component({
  selector: 'app-github-actions-icon',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4">
      <path
        fill="#2088FF"
        d="M10.984 14.611a1.662 1.662 0 1 0 0-3.323 1.662 1.662 0 0 0 0 3.323z"
      />
      <path
        fill="#2088FF"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill-opacity=".1"
      />
      <path
        fill="#2088FF"
        d="M11 7h2v7h-2V7zm7.316 9.435 1.342-1.342a7.011 7.011 0 0 0 0-9.906l-1.342 1.342a5.009 5.009 0 0 1 0 7.907zm-3.344-9.906-1.342 1.342a3.014 3.014 0 0 0 0 4.259l1.342 1.342a5.009 5.009 0 0 0 0-7.071l-.671.671.671.671v-1.414l-.671-.671-.671.671v1.414l.671-.671zm-7.66 7.235 1.342 1.342a7.011 7.011 0 0 0 9.906 0l-1.342-1.342a5.009 5.009 0 0 1-7.234-.672L7.087 14l1.833.02-.672-.672H6.835v1.414l.671.671.671-.671z"
      />
    </svg>
  `,
})
export class GithubActionsIconComponent {}
