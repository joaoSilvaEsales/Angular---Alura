import { Component } from '@angular/core';
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number = 0;
  destino: number = 1000;

  transferir() {
    console.log('Solicitada Nova Transferencia');
    console.log('Valor: ', this.valor)
    console.log('Destino: ', this.destino)
  }
}
