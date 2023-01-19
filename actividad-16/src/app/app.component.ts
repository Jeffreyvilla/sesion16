import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-16';
  valor1 = 0;
  valor2 = 0;
  resultado = ''
  operador: any;
  constructor(public router: Router) {

  }

  irPeru() {
    this.router.navigate(['/peru']);
  }

  irChile() {
    this.router.navigate(['/chile']);
  }

  irUruguar() {
    this.router.navigate(['/uruguay']);
  }

}
