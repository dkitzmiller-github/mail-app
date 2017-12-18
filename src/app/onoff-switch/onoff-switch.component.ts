import {Component, OnInit} from '@angular/core';

export enum EnumOnOff { Off = 0, On = 1 };

@Component({
    selector: 'app-onoff-switch',
    templateUrl: './onoff-switch.component.html',
    styleUrls: ['./onoff-switch.component.css']
})
export class OnoffSwitchComponent implements OnInit {

    onoffValue = EnumOnOff.Off;

    constructor() {
    }

    ngOnInit() {
    }

    toggleSwitch(): void {
        this.onoffValue = this.onoffValue === EnumOnOff.Off ? EnumOnOff.On : EnumOnOff.Off;
    }

    getBgColor(): string {
        if (this.onoffValue === EnumOnOff.Off) {
            return 'red';
        }
        return 'green';
    }

    getText(): string {
        if (this.onoffValue === EnumOnOff.Off) {
            return 'OFF';
        }
        return 'ON';

    }


}
