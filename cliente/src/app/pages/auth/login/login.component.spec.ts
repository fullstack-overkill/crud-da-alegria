import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  }));

  it('Deve criar o componente da pagina de Login', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const loginComponent = fixture.debugElement.componentInstance;
    expect(loginComponent).toBeTruthy();
  });

});