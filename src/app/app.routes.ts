import { CadastroUsuarioComponent } from './Componentes/cadastro-usuario/cadastro-usuario.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import path from 'path';
import { Component } from '@angular/core';
import { LayoutComponent } from './Componentes/layout/layout.component';
import { homedir } from 'os';
import { HomeComponent } from './Componentes/home/home.component';
import { authGuard } from './Guard/auth.guard';
import { ParametrizacaoComponent } from './Componentes/parametrizacao/parametrizacao.component';


export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
                canActivate: [authGuard]
            }
        ]
    },
    {
        path: 'cadastroUsuario',
        component: CadastroUsuarioComponent,
        canActivate: [authGuard]
    },
    {
        path: 'parametrizacao',
        component: ParametrizacaoComponent,
        canActivate: [authGuard]
    },   
];
