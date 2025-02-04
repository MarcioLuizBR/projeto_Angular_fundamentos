import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-componente-filho',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent {
  @Input() sobrenome: string = "";
  @Output() mostraNome = new EventEmitter<string>();

  nome = "";

  constructor() {
    console.log("Componente Filho foi carregado!");
  }

  enviarNome() {
    console.log("Enviando nome:", this.nome);
    this.mostraNome.emit(this.nome);
  }
}
