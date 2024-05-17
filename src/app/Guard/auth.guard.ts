import { AuthenticationService } from './../Services/authentication.service';
import { CanActivateFn, Router } from '@angular/router';
import { privateDecrypt } from 'crypto';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
