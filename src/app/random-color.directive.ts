import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appRandomColor]',
  standalone: true
})
export class RandomColorDirective {
  // private randomColor: string;

  constructor() {
    this.randomColor = this.getRandomHexColor();
  }

  getRandomHexColor = () => {
    const hexMax = 0xffffff; // 16777215 in decimal, the max value for a 6-digit hex color
    const randomColor: string = Math.floor(Math.random() * hexMax).toString(16); // Generate a random number and convert to hex
     // Ensure the result is 6 characters long
    return "#" + randomColor.padStart(6, '0');
  }

  @HostBinding('style.backgroundColor') randomColor;

}
