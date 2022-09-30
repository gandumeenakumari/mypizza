import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzasListComponent } from './components/pizzas/pizzas-list/pizzas-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AddPizzaComponent } from './components/pizzas/add-pizza/add-pizza.component';
import { ViewPizzaComponent } from './components/view-pizza/view-pizza.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ShowPizzaComponent } from './components/pizzas/show-pizza/show-pizza.component';
import { VegetarianComponent } from './components/category-list/vegetarian/vegetarian.component';
import { LoginComponent } from './components/login/login.component';
import { orderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzasListComponent,
    HomeComponent,
    AddPizzaComponent,
    ViewPizzaComponent,
    CategoryListComponent,
    ShowPizzaComponent,
    VegetarianComponent,
    LoginComponent,
    orderComponent,
    CartComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
