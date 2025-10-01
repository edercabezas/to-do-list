import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {
  optionMenu: boolean = false;
  constructor() { }

  ngOnInit() {}

  clicicMenu(): void {
    this.optionMenu = !this.optionMenu;
    console.log('sllkdas')
  }

}
