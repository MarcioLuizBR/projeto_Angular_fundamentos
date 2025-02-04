import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteFilhoComponent } from '../componente-filho/componente-filho.component';

@Component({
  selector: 'app-componente-pai',
  standalone: true,
  imports: [CommonModule, ComponenteFilhoComponent],
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent {
  sobrenome: string = "da Silva";

  constructor() {
    console.log("Componente Pai foi carregado!");
  }

  mostrarNome(nome: string) {
    console.log("Nome recebido do filho:", nome);
  }
}
