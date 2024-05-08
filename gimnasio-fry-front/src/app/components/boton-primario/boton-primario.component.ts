import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-boton-primario',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './boton-primario.component.html',
  styleUrl: './boton-primario.component.scss'
})
export class BotonPrimarioComponent {
  @Input() textoBoton: string = '';
  @Output() clickEvent = new EventEmitter<void>();

  onClick(): void {
    this.clickEvent.emit();
  }
}
