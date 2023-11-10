import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateRootComponent } from './private-root.component';

describe('PrivateRootComponent', () => {
  let component: PrivateRootComponent;
  let fixture: ComponentFixture<PrivateRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateRootComponent]
    });
    fixture = TestBed.createComponent(PrivateRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
