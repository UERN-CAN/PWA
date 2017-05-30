import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComponentComponent } from './novo-component.component';

describe('NovoComponentComponent', () => {
  let component: NovoComponentComponent;
  let fixture: ComponentFixture<NovoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
