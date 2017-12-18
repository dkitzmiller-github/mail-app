import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-us-timezone-display',
    templateUrl: './us-timezone-display.component.html',
    styleUrls: ['./us-timezone-display.component.css']
})
export class UsTimezoneDisplayComponent implements OnInit {

    displayedTime = new Date();
    hours = 0;
    currentButton: HTMLButtonElement;

    constructor() {
    }

    ngOnInit() {
        setInterval(() => {

            this.displayedTime = new Date();
            const hrs = this.displayedTime.getHours();
            this.displayedTime.setHours(hrs - this.hours);
        }, 1000);
    }

    changeTimeZone($event: Event) {
        console.log($event);
        if (!this.currentButton) {
            this.currentButton = <HTMLButtonElement>$event.target;
            this.currentButton.style.backgroundColor = 'yellow';
        }

        if (this.currentButton === (<HTMLButtonElement>$event.target)) {
            return;
        }

        this.currentButton.style.backgroundColor = 'white';
        this.currentButton = <HTMLButtonElement>$event.target;
        this.currentButton.style.backgroundColor = 'yellow';

        this.updateTime(this.currentButton.name);
    }

    updateTime(name: string) {
        console.log(this.displayedTime.getTimezoneOffset());
        this.getTimeZoneDifference(name);
    }

    getTimeZoneDifference(tz: string) {

        this.hours = 0;
        if (tz === 'pst') {
            this.hours = 0;
        } else if (tz === 'mst') {
            this.hours = 1;
        } else if (tz === 'cst') {
            this.hours = 2;
        } else if (tz === 'est') {
            this.hours = 3;
        }
    }

}
