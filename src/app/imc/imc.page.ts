import { Component, OnInit } from '@angular/core';
import { Imc } from 'src/models/Imc';
import { ImcService } from 'src/services/ImcService';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {
  imc: Imc = new Imc();
  result: number;

  constructor(private _ImcService: ImcService) {
    this.result = 0;
   }

  ngOnInit() {
  }

  calcular(){
    this.result = this._ImcService.calcularImc(this.imc);
  }

}
