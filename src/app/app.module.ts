import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DojomailComponent } from './dojomail/dojomail.component';
import { RetroBarcodeGeneratorComponent } from './retro-barcode-generator/retro-barcode-generator.component';
import {RandomColorsService} from './service/random-colors.service';
import { UsTimezoneDisplayComponent } from './us-timezone-display/us-timezone-display.component';
import { OnoffSwitchComponent } from './onoff-switch/onoff-switch.component';
import { SwitchBoardComponent } from './switch-board/switch-board.component';

@NgModule({
  declarations: [
    AppComponent,
    DojomailComponent,
    RetroBarcodeGeneratorComponent,
    UsTimezoneDisplayComponent,
    OnoffSwitchComponent,
    SwitchBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RandomColorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
