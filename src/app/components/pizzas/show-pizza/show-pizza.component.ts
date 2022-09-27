import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-pizza',
  templateUrl: './show-pizza.component.html',
  styleUrls: ['./show-pizza.component.css']
})
export class ShowPizzaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show=[
    {'id':1,'description':'Grilled Chicken','image':'/assets/img/grilled_chicken.jpg'},
    {'id':2,'description':'Hawaiian','image':'/assets/img/Hawaiian_pizza_1.jpg'},
    {'id':3,'description':'Flying jacob','image':'/assets/img/flying_jacob.jpg'},
    {'id':4,'description':'Kentucky','image':'/assets/img/kentucky.jpg'},
    {'id':5,'description':'Pescatore','image':'/assets/img/pescatore.jpg'},
    {'id':6,'description':'Capricciosa','image':'/assets/img/Pizza_capricciosa.jpg'},
    {'id':7,'description':'Barcelona','image':'/assets/img/barcelona.jpg'},
    {'id':8,'description':'Vegetarian pizza','image':'/assets/img/Vegetarian_pizza.jpg'},
    {'id':9,'description':'La Carne','image':'/assets/img/la_carne.jpg'},
    {'id':10,'description':'Capricciosa pizza','image':'/assets/img/Pizza_capricciosa.jpg'},
  ]
}
