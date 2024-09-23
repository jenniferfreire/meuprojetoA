import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LanchesPage implements OnInit {
  
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  vaiParaHome() {
    this.navCtrl.navigateBack('home')
  }

}
