import { MatIconModule } from '@angular/material/icon';
import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';  // Importa MatInputModule

@Component({
  selector: 'app-input-imagen',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatIconModule],  // Asegúrate de que MatInputModule está en la lista de imports
  templateUrl: './input-imagen.component.html',
  styleUrls: ['./input-imagen.component.scss']  // Corrige styleUrl a styleUrls
})
export class InputImagenComponent {
  @Input() errorMessage: string = ''; // Propiedad de entrada para el mensaje de error
  @Input() imageSrc: string = ''; // Propiedad de entrada para la ruta de la imagen

  showError: boolean = false;

  onInput(event: any) {
    // Aquí puedes agregar tu lógica para validar el valor del input
    const inputValue = event.target.value;
    this.showError = inputValue.length < 3; // Muestra el error si la longitud del valor es menor que 3
  }
}
