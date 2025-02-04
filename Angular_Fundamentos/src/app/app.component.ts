import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ComponenteFilhoComponent, ComponentePaiComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Fundamentos';
}
