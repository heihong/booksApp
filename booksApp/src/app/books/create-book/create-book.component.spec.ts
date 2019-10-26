import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookComponent } from './create-book.component';
import {FormsModule} from '@angular/forms';

describe('CreateBookComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CreateBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    spyOn(component.bookCreated, 'emit');
    component.title = 'Harry';
    component.price = 30;

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.bookCreated.emit).toHaveBeenCalledWith({title: component.title, price: component.price});
  });
});
