import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NovoComponentComponent } from './novo-component/novo-component.component';
import { EXRotasRoutingModule } from './exrotas/exrotas-routing.module';
import { Component2Component } from './component2/component2.component';

import { rootReducer, IAppState, INITIAL_STATE } from '../store';
import { CounterActions } from './app.actions';

@NgModule({
  declarations: [
    AppComponent,
    NovoComponentComponent,
    Component2Component
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpModule,
    EXRotasRoutingModule,
    NgReduxModule
  ],
  providers: [CounterActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
      // Tell @angular-redux/store about our rootReducer and our initial state.
      // It will use this to create a redux store for us and wire up all the
      // events.
      ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE);
    }
}
