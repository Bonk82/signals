import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiServicioService } from '../mi-servicio.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,RouterOutlet
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent implements OnInit {
  public servicio = inject(MiServicioService)
  constructor(){}

  ngOnInit(): void { 
    console.log('en login',this.servicio.usuarios());
    this.servicio.usuarios()
  }

}
