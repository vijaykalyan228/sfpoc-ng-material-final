import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigGmapsComponent } from './config-gmaps.component';

describe('ConfigGmapsComponent', () => {
  let component: ConfigGmapsComponent;
  let fixture: ComponentFixture<ConfigGmapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigGmapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigGmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
