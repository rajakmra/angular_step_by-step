import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogicComponent } from './blogic.component';

describe('BlogicComponent', () => {
  let component: BlogicComponent;
  let fixture: ComponentFixture<BlogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogicComponent ]
    })
    .compileComponents();
  }));

  
  it('should create', () => {
    const fixture = TestBed.createComponent(BlogicComponent);
    const component = fixture.componentInstance;
    const el = fixture.nativeElement.querySelector('input');
    //el.value ='hello';
    //el.dispatchEvent(new Event('input'));
    component.removeVowels(el.value);
    //expect(component.myoutput).toBe('hll');
    expect(component.myoutput).toEqual('hll');
    //expect(component.removeVowels('Hello World')).toBe('Hll Wrld');
    // console.log(component.removeVowels('Vinith Kumar'));
  });

});
