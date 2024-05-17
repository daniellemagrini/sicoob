import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuHamburguerComponent } from '../menu-hamburguer/menu-hamburguer.component';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../Services/menu.service'

@Component({
  selector: 'app-parametrizacao',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MenuHamburguerComponent, CommonModule],
  templateUrl: './parametrizacao.component.html',
  styleUrl: './parametrizacao.component.css'
})
export class ParametrizacaoComponent implements OnInit {
  menuOpen = false;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.menuOpen$.subscribe(open => {
      this.menuOpen = open;
    });
  }
}
