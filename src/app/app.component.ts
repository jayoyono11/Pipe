import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  title = 'Conversion des devises';
  fcfa = new Devise('FCFA', 'XAF');
  euro = new Devise('Euro', 'EUR');
  dollar = new Devise('Dollar us', 'USD');
  sterling = new Devise('Livre sterling', 'GBP');
  yenJaponais= new Devise('Yen japonais', 'JPY');
  yuanChinois = new Devise('Yuan chinois', 'CNY');
  francSuisse = new Devise('Franc suisse', 'CHF');
  dollarCanadien = new Devise('Dollar canadien', 'CAD');
  pesoMex= new Devise('peso mexicain', 'MXN');
  dirhamEmirates= new Devise('Dirham Emirates', 'AED');


  listeDevise = [
    this.dollar,
    this.fcfa,
    this.euro,
    this.sterling,
    this.yenJaponais,
    this.yuanChinois,
    this.dollarCanadien,
    this.francSuisse,
    this.pesoMex,
    this.dirhamEmirates,

    

    
   
  ];
  depart = this.dollar;
  arrivee = this.euro;
  public value=0;
  public value2=0;

}

class Devise {
  name:String = '';
  code:String = '';
  constructor(name: string, code: string){
      this.name = name;
      this.code = code;
  }
}
