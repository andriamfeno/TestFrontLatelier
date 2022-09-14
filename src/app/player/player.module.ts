import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PlayerRoutingModule } from './player-routing.module';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './home/card/card.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    HttpClientModule
  ]
})
export class PlayerModule { }
