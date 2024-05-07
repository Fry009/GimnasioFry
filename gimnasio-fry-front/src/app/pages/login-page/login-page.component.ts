import { Component } from '@angular/core';
import { InputImagenComponent } from '../../components/input-imagen/input-imagen.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputImagenComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
