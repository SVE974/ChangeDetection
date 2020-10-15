import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() personne: Personne;

  constructor() { }

  ngOnInit(): void {
  }

  public check() {
    console.log("chargement de la vue...");
  }

}
