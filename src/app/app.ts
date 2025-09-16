import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarritoComponent } from './componentes/carrito/carrito';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarritoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mensajesPracticaWebII');
}
