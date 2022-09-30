import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { VegetarianComponent } from './components/category-list/vegetarian/vegetarian.component';
import { LoginComponent } from './components/login/login.component';
import { orderComponent } from './components/order/order.component';
import { AddPizzaComponent } from './components/pizzas/add-pizza/add-pizza.component';
import { PizzasListComponent } from './components/pizzas/pizzas-list/pizzas-list.component';
import { ShowPizzaComponent } from './components/pizzas/show-pizza/show-pizza.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pizzas/add',component:AddPizzaComponent},
  {
    path:'Pizzas',
    component:PizzasListComponent
  },
  {
    path:'pizzas/show',
    component:ShowPizzaComponent
  },
  {
    path:'category-list/vegetarian',
    component:VegetarianComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Orders',
    component:orderComponent
  },
  {
    path:'cart',
    component:CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
