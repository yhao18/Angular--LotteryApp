import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { HeaderComponent } from './components/header/header.component';
import { BetValueComponent } from './components/bet-value/bet-value.component';
import { CalculationComponent } from './components/calculation/calculation.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalKeypadComponent } from './components/modal-keypad/modal-keypad.component';
import { NumberCardComponent } from './components/number-card/number-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BillPageComponent } from './pages/bill-page/bill-page.component';

@NgModule({
  declarations: [
    AppComponent,
    KeypadComponent,
    HeaderComponent,
    BetValueComponent,
    CalculationComponent,
    ModalComponent,
    ModalKeypadComponent,
    NumberCardComponent,
    HomePageComponent,
    BillPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
