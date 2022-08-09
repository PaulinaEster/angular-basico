import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animals';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  
  name: string = '';
  type: string = '';
  age: number = 0; 
  novoAnimal: Animal = {
    name: '',
    type: '',
    id: 0 ,
    age: 0 
  }
  animals: Animal[] = [];
  validar = '';
  animalDetails: string = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {
  }


  showDetails(animal: Animal): void {
    this.animalDetails = `o ${animal.name} tem ${animal.age} anos e é um ${animal.type}`;
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.animals.filter((a)=>animal.name !== a.name);
    this.listService.remove( animal.id).subscribe();
  }

  adicionarAnimal(): void{
    if(this.name && this.type && this.age){
      this.novoAnimal= {
        name: this.name, type: this.type, age: this.age, id: Math.floor(10* Math.random())
      } 
      this.animals = this.listService.adicionar(this.animals, this.novoAnimal);
      this.name = '';
      this.age = 0;
      this.type = '';
    }else{
      this.validar = "Todos os campos devem ser preenchidos";
    }
  }

  getAnimals(): void {
    this.listService.getAll().subscribe( (animals: Animal[]) => this.animals = animals );
    console.table(this.animals);
  }
}
