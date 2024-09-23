import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  constructor(
    private navCtrl: NavController
  ) {}

  vaiParaOferta() {
    this.navCtrl.navigateForward('oferta')
  }
  vaiParaLanches() {
    this.navCtrl.navigateForward('lanches')
  }
  vaiParaPratosEntrada() {
    this.navCtrl.navigateForward('pratos-entrada')
  }
  vaiParaPratosRefeicao() {
    this.navCtrl.navigateForward('pratos-refeicao')
  }
  vaiParaSobremesas() {
    this.navCtrl.navigateForward('sobremesas')
  }
  vaiParaBebidas() {
    this.navCtrl.navigateForward('bebidas')
  }
}

export class ExampleComponent {
  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }
}