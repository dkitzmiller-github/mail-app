import { Component, OnInit } from '@angular/core';
import {RandomColorsService} from '../service/random-colors.service';

@Component({
  selector: 'app-retro-barcode-generator',
  templateUrl: './retro-barcode-generator.component.html',
  styleUrls: ['./retro-barcode-generator.component.css']
})
export class RetroBarcodeGeneratorComponent implements OnInit {

  colors: Array<string> = [];

  constructor(private randomColors: RandomColorsService) { }

  ngOnInit() {
    this.colors = this.randomColors.getArrayOfColors();
  }

  refresh() {
    this.colors = this.randomColors.getArrayOfColors();
  }

}
