import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties
  length = 0;
  incluedeletters = false;
  incluedenumbers = false;
  incluedesymbols = false;
  password = '';

  // methords
  onChangeLength(event: any) {
    const parsedvalue = parseInt(event.target.value + ' | ');
    // check input is a number
    if (!isNaN(parsedvalue)) {
      this.length = parsedvalue;
    }

  }

  onChangeUseletters() {
    this.incluedeletters = !this.incluedeletters;
  }

  onChangeUseNumbers() {
    this.incluedenumbers = !this.incluedenumbers;
  }

  onChangeUseSymbols() {
    this.incluedesymbols = !this.incluedesymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    // check
    if (this.incluedeletters) {
      validChars += letters;
    }
    if (this.incluedenumbers) {
      validChars += numbers;
    }
    if (this.incluedesymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    // console.log(validChars);
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }






}
