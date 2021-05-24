import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomListSvComponent } from './custom-list-sv.component';

describe('CustomListSvComponent', () => {
  let component: CustomListSvComponent;
  let fixture: ComponentFixture<CustomListSvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomListSvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomListSvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
