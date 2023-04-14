import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  valorInicial: any;
  constructor() {
    this.valorInicial = '';
  }

  inserir(valor: any):void{
    this.valorInicial += valor;
  }

  apagarTudo(): void{
    this.valorInicial = '';
  }

  apagarAEsquerda():void{
    let novalista = this.valorInicial.split('');
    novalista.pop();
    this.valorInicial = novalista.join('');
  }

  calcular(): void{
    this.valorInicial = eval(this.valorInicial);
  }


}
