import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
