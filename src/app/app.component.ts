import { Component } from '@angular/core';
import { Personne } from './personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public personne: Personne = {
    name: "John Doe",
    age: 20
  }

  public reassign() {
    this.personne = {
      name: this.personne.name,
      age: this.personne.age
    }
  }
}
