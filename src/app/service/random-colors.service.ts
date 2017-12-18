import { Injectable } from '@angular/core';

@Injectable()
export class RandomColorsService {

  constructor() { }

  getArrayOfColors(numColors: number = 10) {
        const colors = [];
        for (let n = 0; n < numColors; n++) {
            colors.push(this.getColor());
        }
        return colors;
  }

  private getColor(): string {
      return `#${this.getRandomColor()}${this.getRandomColor()}${this.getRandomColor()}`;

  }

  private getRandomColor(): string {
      return (Math.floor(Math.random() * 255) + 1).toString(16);
  }

}
