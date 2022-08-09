import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Hero';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-heros',
  templateUrl: './list-heros.component.html',
  styleUrls: ['./list-heros.component.css']
})
export class ListHerosComponent implements OnInit {

  heros: Hero[] = [];

  constructor(private listService: ListService) { 
    this.getHeros()
  }

  ngOnInit(): void {
  }

  getHeros(): void{
    this.listService.getAllHeros().subscribe((heros) => this.heros = heros);
    
  }

}
