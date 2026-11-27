import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonList, IonItem, IonLabel, IonImg, IonSearchbar } from '@ionic/angular';
import { MenuService } from '../../services/menu.service';
import { Restaurant } from '../../models/restaurant.model';
import { FormsModule } from '@angular/forms';

// KATA · Dimecres 25/11 (consulta la fitxa de la sessió)
//
// 1. Injecta el MenuService i guarda els restaurants en una propietat (restaurants).
// 2. Mostra'ls a la plantilla amb @for dins d'una ion-list
//    (name, cuisine, rating, deliveryTime i deliveryFee).
// 3. Mostra quants restaurants hi ha: «6 restaurants».
// 4. Afig una ion-searchbar amb [(ngModel)]="searchTerm" que filtre per nom o per cuina.
//    Recorda: [(ngModel)] necessita FormsModule als imports del component.
// 5. Si cap restaurant coincideix, mostra un missatge amb @if / @else.
//
// No toques el MenuService: la pàgina només el fa servir.

@Component({
  selector: 'app-home',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonList, IonItem, IonLabel, IonImg, IonSearchbar,FormsModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {

  restaurants:Restaurant[]=[]
  searchText: string = '';

  menuService = inject(MenuService)

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurants = this.menuService.getRestaurants();
  }

  filteredRestaurants(): Restaurant[] {
  return this.restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(this.searchText.toLowerCase())
  );
}



}
