import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userisAuthenticated = false;
  constructor() {}
  get userIsAuthenticated() {
    return this._userisAuthenticated;
  }
  login() {
    this._userisAuthenticated = true;
  }

  logout() {
    this._userisAuthenticated = false;
  }
}
