import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//NUEVAS IMPORTACIONES
import { TeaDetail } from './pages/tea-detail/tea-detail';
import { TeaList } from './pages/tea-list/tea-list';
import { Register } from './auth/register/register';
import { Login } from './auth/login/login';

@Component({
  imports: [RouterOutlet, TeaDetail, TeaList, Register, Login],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('teaminder');
}
