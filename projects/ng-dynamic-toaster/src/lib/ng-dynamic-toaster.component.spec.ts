import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgDynamicToasterComponent } from './ng-dynamic-toaster.component';

describe('NgDynamicToasterComponent', () => {
  let component: NgDynamicToasterComponent;
  let fixture: ComponentFixture<NgDynamicToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDynamicToasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDynamicToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
