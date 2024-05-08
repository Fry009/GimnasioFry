import { MatIconModule } from '@angular/material/icon';
import { Component, Input, forwardRef } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';  // Importa MatInputModule
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-imagen',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatIconModule],  // Asegúrate de que MatInputModule está en la lista de imports
  templateUrl: './input-imagen.component.html',
  styleUrls: ['./input-imagen.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputImagenComponent),
      multi: true
    }
  ]
})
export class InputImagenComponent {
  @Input() errorMessage: string = ''; // Propiedad de entrada para el mensaje de error
  @Input() iconSrc: string = ''; // Propiedad de entrada para la ruta de la imagen
  @Input() type: string = 'text';
  @Input() placeholder: string = '';

  // Valor del input
  inputValue: string = '';

  // Función para notificar cambios en el valor
  private onChange: (value: string) => void = () => {};
  private onTouch: () => void = () => {};

  showError: boolean = false;

  // Implementación de ControlValueAccessor
  writeValue(value: string): void {
    this.inputValue = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  // Método para emitir el valor del input
  emitValue(value: string): void {
    this.inputValue = value;
    this.onChange(value);
    this.onTouch();
  }

  onInput(event: any) {
    // Aquí puedes agregar tu lógica para validar el valor del input
    const inputValue = event.target.value;
    this.showError = inputValue.length < 3; // Muestra el error si la longitud del valor es menor que 3
  }
}
