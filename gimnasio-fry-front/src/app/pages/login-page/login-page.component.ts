import { Component } from '@angular/core';
import { InputImagenComponent } from '../../components/input-imagen/input-imagen.component';
import { BotonPrimarioComponent } from '../../components/boton-primario/boton-primario.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputImagenComponent,BotonPrimarioComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  doLogin(): void{
    console.log("voy ha hacer login");
  }
}
