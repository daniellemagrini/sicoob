import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';  
import { environment } from '../../environments/environment'; 
import { JwtAuth } from '../Models/jwtAuth';
import { Login } from '../Models/login';
import { Register } from './../Models/register';
import { CodVerificacao } from '../Models/codVerificacao';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  autorizado = false;
  registerUrl = "Auth/Register"
  loginUrl = "Auth/Login"
  verificaLoginUrl = "Auth/VerificaLogin"

  constructor(private http: HttpClient) { }


  public login(user: Login): Observable<CodVerificacao> {
    return this.http.post<CodVerificacao>(`${environment.apiUrl}/${this.loginUrl}`, user);
  }


  /*public login(user: Login): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.loginUrl}`, user);
  }

  GetLogin(user: Login) : Observable<Login> {
    return this.http.get<Login>(`${environment.apiUrl}/${this.loginUrl}`);
  }

  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.registerUrl}`, user);
  }

 
  public getUsuario(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.usuarioUrl}`);
  }*/
}
