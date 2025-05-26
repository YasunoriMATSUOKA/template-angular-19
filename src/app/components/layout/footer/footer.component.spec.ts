import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { HomeIconComponent } from '../../icons/home-icon.component';
import { PrivacyIconComponent } from '../../icons/privacy-icon.component';
import { TermsIconComponent } from '../../icons/terms-icon.component';
import { LegalIconComponent } from '../../icons/legal-icon.component';
import { GithubIconComponent } from '../../icons/github-icon.component';
import { AngularIconComponent } from '../../icons/angular-icon.component';
import { TailwindIconComponent } from '../../icons/tailwind-icon.component';
import { DaisyUiIconComponent } from '../../icons/daisy-ui-icon.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FooterComponent,
        HomeIconComponent,
        PrivacyIconComponent,
        TermsIconComponent,
        LegalIconComponent,
        GithubIconComponent,
        AngularIconComponent,
        TailwindIconComponent,
        DaisyUiIconComponent,
      ],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct background color', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const footer = compiled.querySelector('footer');
    expect(footer?.classList.contains('bg-base-300')).toBeTrue();
  });

  it('should have internal links section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const linkSections = compiled.querySelectorAll('h6.footer-title');
    expect(linkSections[0].textContent).toContain('リンク');

    const internalLinks = compiled.querySelectorAll('a[routerLink]');
    expect(internalLinks.length).toBeGreaterThanOrEqual(4); // ホーム、プライバシーポリシー、利用規約、特定商取引法
  });

  it('should have external links section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const linkSections = compiled.querySelectorAll('h6.footer-title');
    expect(linkSections[1].textContent).toContain('外部リンク');

    const externalLinks = compiled.querySelectorAll('a[target="_blank"]');
    expect(externalLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('should have copyright section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const copyrightText = compiled.textContent;
    expect(copyrightText).toContain('© 2025');
  });

  it('should apply consistent text color to titles', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titles = compiled.querySelectorAll('h6.footer-title');
    for (const title of Array.from(titles)) {
      expect(title.classList.contains('text-base-content')).toBeTrue();
    }
  });
});
