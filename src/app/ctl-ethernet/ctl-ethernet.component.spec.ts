import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtlEthernetComponent } from './ctl-ethernet.component';

describe('CtlEthernetComponent', () => {
  let component: CtlEthernetComponent;
  let fixture: ComponentFixture<CtlEthernetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtlEthernetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtlEthernetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
