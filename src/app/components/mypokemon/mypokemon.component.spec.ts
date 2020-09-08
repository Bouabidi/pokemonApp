import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypokemonComponent } from './mypokemon.component';

describe('MypokemonComponent', () => {
  let component: MypokemonComponent;
  let fixture: ComponentFixture<MypokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
