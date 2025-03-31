import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceLaunchesComponent } from './space-launches.component';

describe('SpaceLaunchesComponent', () => {
  let component: SpaceLaunchesComponent;
  let fixture: ComponentFixture<SpaceLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceLaunchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
