import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'player',
  loadChildren:()=>import('./player/player.module').then(x=>x.PlayerModule)
},{
  path:'',
  redirectTo:'player/home',
  pathMatch: "full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
