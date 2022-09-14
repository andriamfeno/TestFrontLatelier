import { Component, Input, OnInit } from '@angular/core';
import { PlayerModule } from '../../player.module';
import { Player } from '../../shared/player.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  player:Player=null;
  constructor() { }

  ngOnInit(): void {
  }

}
