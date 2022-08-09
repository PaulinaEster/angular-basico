import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size= 40;
  font= 'Ariel';
  color = 'blue';

  classes = ['caneta', 'lapis'];

  constructor() { }

  ngOnInit(): void {
  }

}