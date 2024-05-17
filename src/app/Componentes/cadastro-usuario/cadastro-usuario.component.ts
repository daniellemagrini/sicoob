import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuHamburguerComponent } from '../menu-hamburguer/menu-hamburguer.component';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../Services/menu.service'

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MenuHamburguerComponent, CommonModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent implements OnInit {
  
  menuOpen = false;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.menuOpen$.subscribe(open => {
      this.menuOpen = open;
    });
  }
}
