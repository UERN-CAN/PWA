import { Component, OnInit } from '@angular/core';

import { NgRedux, select } from '@angular-redux/store';
import { CounterActions } from '../app.actions';
import {IAppState} from "../../store";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  @select() readonly count$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions) {

    }

  ngOnInit() {
  }

  ngOnDestroy() {
      //this.subscription.unsubscribe();
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }
  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }

}
