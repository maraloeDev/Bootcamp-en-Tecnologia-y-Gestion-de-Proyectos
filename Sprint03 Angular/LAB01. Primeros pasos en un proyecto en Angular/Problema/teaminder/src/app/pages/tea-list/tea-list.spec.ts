import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeaList } from './tea-list';

describe('TeaList', () => {
  let component: TeaList;
  let fixture: ComponentFixture<TeaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeaList],
    }).compileComponents();

    fixture = TestBed.createComponent(TeaList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
