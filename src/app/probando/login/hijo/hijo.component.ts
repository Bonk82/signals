import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MiServicioService } from '../../mi-servicio.service';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export default class HijoComponent implements OnInit {
  public servicio = inject(MiServicioService)
  constructor(){}
  ngOnInit(){
    setTimeout(() => {
      console.log('con lops usuarios en hijo',this.servicio.usuarios());
      
    }, 2000);
  }
}
