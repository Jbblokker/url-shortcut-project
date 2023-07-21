import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlHistoryDisplayComponent } from './url-history-display.component';

describe('UrlHistoryDisplayComponent', () => {
  let component: UrlHistoryDisplayComponent;
  let fixture: ComponentFixture<UrlHistoryDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UrlHistoryDisplayComponent]
    });
    fixture = TestBed.createComponent(UrlHistoryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
