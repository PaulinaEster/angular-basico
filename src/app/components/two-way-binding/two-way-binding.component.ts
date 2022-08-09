import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  name: string = '';
  email: string = ''; 
  validado: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  validarForm(): void{
    if(this.name.length < 5 ){
      this.validado = "Name precisa ter no minimo 5 caracteres";
    }else if(!this.email.includes("@") ) {
      this.validado = 'Insira um email valido';
    }else{
      this.validado = "VALIDADO!!";
    }
  }
}
