import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  someText: string = `texto texto1 texto2`;
  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
