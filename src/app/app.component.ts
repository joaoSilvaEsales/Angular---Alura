import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jcarvbank';

  constructor(private services: TransferenciaService){}

  transferir($event){
    this.services.adicionar($event);
  }
}
