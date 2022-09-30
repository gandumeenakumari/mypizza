import { Component, OnInit } from '@angular/core';
import { __classPrivateFieldGet } from 'tslib';
import { Pizza } from '../models/pizza.model';
import { OrderDetailsService } from '../services/order-details.service';
import { PizzasService } from '../services/pizzas.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

url:any="";
Pizza:Pizza []=[];
  service: any;
  constructor(private route:ActivatedRoute,private OrderDetailsService:OrderDetailsService,private router:Router) { }

  ngOnInit(): void {
    this.OrderDetailsService.getAllPizzas()
    .subscribe({
      next:(Pizza: Pizza[])=>
      {
        this.Pizza=Pizza;
      },
      error:(response: any)=>
      {
        console.log(response);
      }
    })

    
  } 
  }



