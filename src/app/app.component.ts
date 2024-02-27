import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./Componentes/login/login.component";
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { HomeComponent } from './Componentes/home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, NavbarComponent, HomeComponent]
})
export class AppComponent {
  title = 'sicoob';
}
