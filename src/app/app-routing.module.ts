import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', redirectTo:'movies', pathMatch:'full'},
  {path:'movies', component:MoviesComponent},
  {path:'about', component:AboutComponent},
  {path:'registration', loadChildren:() => import("./auth/auth.module").then((m) => m.AuthModule)},
  {path:'movieDetails/:id', component: MovieDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
