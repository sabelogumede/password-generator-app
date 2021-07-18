import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties
  incluedeletters = false;
  incluedenumbers = false;
  incluedesymbols = false;
  password = '';

  // methords
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
    this.password = 'My Password!!!'

    console.log(`
    About to generate a password with the following:
    includes leters: ${this.incluedeletters}
    INcludes numbers: ${this.incluedenumbers}
    Includes symbols: ${this.incluedesymbols}
    `);


  }

}
