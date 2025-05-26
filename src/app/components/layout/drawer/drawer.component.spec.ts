import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerComponent } from './drawer.component';
import { HomeIconComponent } from '../../icons/home-icon.component';
import { PrivacyIconComponent } from '../../icons/privacy-icon.component';
import { TermsIconComponent } from '../../icons/terms-icon.component';
import { LegalIconComponent } from '../../icons/legal-icon.component';
import { GithubIconComponent } from '../../icons/github-icon.component';
import { AngularIconComponent } from '../../icons/angular-icon.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';

describe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DrawerComponent,
        HomeIconComponent,
        PrivacyIconComponent,
        TermsIconComponent,
        LegalIconComponent,
        GithubIconComponent,
        AngularIconComponent,
      ],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have proper background class', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const aside = compiled.querySelector('aside');
    expect(aside?.classList.contains('bg-base-100')).toBeTrue();
  });

  it('should have logo section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('.sticky img');
    expect(logo).toBeTruthy();
    expect(logo?.getAttribute('alt')).toContain('Angular Logo');
  });

  it('should have menu section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const menuTitle = compiled.querySelector('h2.menu-title');
    expect(menuTitle?.textContent).toContain('メニュー');

    const menuItems = compiled.querySelectorAll('a[routerLink]');
    expect(menuItems.length).toBe(4); // ホーム、プライバシーポリシー、利用規約、特定商取引法
  });

  it('should have external links section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const menuTitles = compiled.querySelectorAll('h2.menu-title');
    expect(menuTitles[1].textContent).toContain('外部リンク');

    const externalLinks = compiled.querySelectorAll('a[target="_blank"]');
    expect(externalLinks.length).toBeGreaterThan(0);
  });

  it('should apply text-base-content class to titles', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titles = compiled.querySelectorAll('h2.menu-title');
    for (const title of Array.from(titles)) {
      expect(title.classList.contains('text-base-content')).toBeTrue();
    }
  });

  it('should apply hover:text-primary to menu links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const internalLinks = compiled.querySelectorAll('a[routerLink]');
    for (const link of Array.from(internalLinks)) {
      expect(link.classList.contains('hover:text-primary')).toBeTrue();
    }
  });

  it('should have a sticky header section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const stickyHeader = compiled.querySelector('.sticky');
    expect(stickyHeader).toBeTruthy();
    expect(stickyHeader?.classList.contains('bg-base-300')).toBeTrue();
  });
});
