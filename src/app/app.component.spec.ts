import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
  
    // Set up the testing module
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ AppComponent ]
      })
      .compileComponents();
    });
  
    // Create the component before each test
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    // Test if the component is created
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    // Test if the message property displays correctly in the template
    // it('should display "Hello, World!" in the template', () => {
    //   component.message = 'Hello, World!';
    //   fixture.detectChanges();  // Detect changes
    //   const compiled = fixture.nativeElement as HTMLElement;
    //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, World!');
    // });
  });