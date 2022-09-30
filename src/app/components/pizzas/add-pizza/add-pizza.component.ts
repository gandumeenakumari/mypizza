import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {

  addPizzaRequest:Pizza={
    pizzaid:'',
    name:'',
    category:'',
    price:0
  };

  constructor(private route:ActivatedRoute,private pizzasService:PizzasService,private router:Router) {
}
  ngOnInit(): void {
  }
  addPizza()
  {
    this.pizzasService.addPizza(this.addPizzaRequest)
    .subscribe({
      next:(Pizza)=>
      {
        console.log("add item method called");
        this.router.navigate(['Pizzas']);

      }
    })
  }

}
