import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecAddEditComponent } from './receita-add-edit.component';

describe('RecAddEditComponent', () => {
  let component: RecAddEditComponent;
  let fixture: ComponentFixture<RecAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
