import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortComponent } from './port-dash.component';

describe('PortDashComponent', () => {
  let component: PortComponent;
  let fixture: ComponentFixture<PortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortComponent]
    });
    fixture = TestBed.createComponent(PortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
