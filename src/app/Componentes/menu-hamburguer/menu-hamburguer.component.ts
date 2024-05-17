import { Component, Output, EventEmitter } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../Services/menu.service'


@Component({
  selector: 'app-menu-hamburguer',
  standalone: true,
  imports: [MatSidenavModule, RouterModule, CommonModule],
  templateUrl: './menu-hamburguer.component.html',
  styleUrl: './menu-hamburguer.component.css'
})

export class MenuHamburguerComponent {

  menuOpen = false;

  constructor(private menuService: MenuService) {
    this.menuService.menuOpen$.subscribe(open => {
      this.menuOpen = open;
    });
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
