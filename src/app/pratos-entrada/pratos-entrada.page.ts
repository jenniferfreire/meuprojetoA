import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pratos-entrada',
  templateUrl: './pratos-entrada.page.html',
  styleUrls: ['./pratos-entrada.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PratosEntradaPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  vaiParaHome() {
    this.navCtrl.navigateBack('home')
  }
}