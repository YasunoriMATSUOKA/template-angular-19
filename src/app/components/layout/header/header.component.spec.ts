import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MenuIconComponent } from '../../icons/menu-icon.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, MenuIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const testTitle = 'Test Title';
    component.title = testTitle;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('.navbar-center a');
    expect(titleElement?.textContent).toContain(testTitle);
  });

  it('should have sticky header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('header');
    expect(header?.classList.contains('top-0')).toBeTrue();
  });

  it('should have avatar menu', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const avatarMenu = compiled.querySelector('.dropdown-end');
    expect(avatarMenu).toBeTruthy();
  });

  it('should have three menu items in avatar dropdown', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const menuItems = compiled.querySelectorAll('.dropdown-content li');
    expect(menuItems.length).toBe(3);
  });
});
