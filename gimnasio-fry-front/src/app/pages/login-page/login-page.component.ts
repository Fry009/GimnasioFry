import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputImagenComponent } from '../../components/input-imagen/input-imagen.component';
import { BotonPrimarioComponent } from '../../components/boton-primario/boton-primario.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputImagenComponent, BotonPrimarioComponent, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'], // Corregido 'styleUrl' a 'styleUrls'
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  usuarioControl: FormControl;
  contrasenaControl: FormControl;

  constructor() {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    // Acceso directo a los controles para uso en el template
    // Asignación correcta con tipado explícito
    this.usuarioControl = this.loginForm.get('usuario') as FormControl;
    this.contrasenaControl = this.loginForm.get('contrasena') as FormControl;
  }

  onSubmit(): void {
    debugger;
    if (this.loginForm.valid) {
      console.log('Datos del formulario:', this.loginForm.value);
    } else {
      console.log('Verifique los campos del formulario.');
      this.loginForm.markAllAsTouched();
    }
  }
}
