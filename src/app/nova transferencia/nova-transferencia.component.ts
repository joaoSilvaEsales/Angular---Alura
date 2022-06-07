import { Transferencia } from './../modelos/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number = 1000;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    console.log('Solicitada Nova Transferencia');

    const valorEmitir: Transferencia = {valor : this.valor, destino : this.destino}

    this.service.adicionar(valorEmitir).subscribe
    (resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.log(error)
    );
  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }
}
