import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  private http = inject(HttpClient)

  #state = signal<any>([])

  public usuarios = computed(()=>this.#state())

  constructor() {
    console.log('cargando data');
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((res:any)=>{
      this.#state.set(res)
      console.log('los usuarios en servicio',res,this.#state(),'y los',this.usuarios());
    })
    
   }
}
