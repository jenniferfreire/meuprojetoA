import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pratos-refeicao',
  templateUrl: './pratos-refeicao.page.html',
  styleUrls: ['./pratos-refeicao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PratosRefeicaoPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  vaiParaHome() {
    this.navCtrl.navigateBack('home')
  }
}