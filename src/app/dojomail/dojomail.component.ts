import { Component, OnInit } from '@angular/core';
import {dataDojoMail} from './data-dojomail';

@Component({
  selector: 'app-dojomail',
  templateUrl: './dojomail.component.html',
  styleUrls: ['./dojomail.component.css']
})
export class DojomailComponent implements OnInit {

  readonly emails = dataDojoMail;

  constructor() { }

  ngOnInit() {
  }

  getImportance(value: boolean): string {
    if (value) {
      return 'High';
    }
    return 'Low';
  }

}
