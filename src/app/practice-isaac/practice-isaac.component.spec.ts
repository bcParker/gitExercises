import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRACTICEISAACComponent } from './practice-isaac.component';

describe('PRACTICEISAACComponent', () => {
  let component: PRACTICEISAACComponent;
  let fixture: ComponentFixture<PRACTICEISAACComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRACTICEISAACComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRACTICEISAACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
