import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeatilsComponent } from './book-deatils.component';

describe('BookDeatilsComponent', () => {
  let component: BookDeatilsComponent;
  let fixture: ComponentFixture<BookDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
