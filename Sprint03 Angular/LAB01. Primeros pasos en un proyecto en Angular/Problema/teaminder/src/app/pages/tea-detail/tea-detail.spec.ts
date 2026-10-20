import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeaDetail } from './tea-detail';

describe('TeaDetail', () => {
  let component: TeaDetail;
  let fixture: ComponentFixture<TeaDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeaDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(TeaDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
