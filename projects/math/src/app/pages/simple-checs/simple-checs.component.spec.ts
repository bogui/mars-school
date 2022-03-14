import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleChecsComponent } from './simple-checs.component';

describe('SimpleChecsComponent', () => {
  let component: SimpleChecsComponent;
  let fixture: ComponentFixture<SimpleChecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleChecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleChecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
