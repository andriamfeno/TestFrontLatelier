import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  players:Player[] | null | undefined;
  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe({
      next: (response)=>{
        this.players=response;
      }
    })
  }
}
