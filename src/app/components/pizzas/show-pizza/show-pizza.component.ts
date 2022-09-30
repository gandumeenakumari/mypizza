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
    {'id':1,'description':'Grilled Chicken','p':300,'image':'/assets/img/grilled_chicken.jpg'},
    {'id':2,'description':'Hawaiian','p':400,'image':'/assets/img/Hawaiian_pizza_1.jpg'},
    {'id':3,'description':'Flying jacob','p':200,'image':'/assets/img/flying_jacob.jpg'},
    {'id':4,'description':'Kentucky','p':300,'image':'/assets/img/kentucky.jpg'},
    {'id':5,'description':'Pescatore','p':250,'image':'/assets/img/pescatore.jpg'},
    {'id':6,'description':'Barcelona','p':250,'image':'/assets/img/barcelona.jpg'},
    {'id':7,'description':'Vegetarian pizza','p':300,'image':'/assets/img/Vegetarian_pizza.jpg'},
    {'id':8,'description':'La Carne','p':300,'image':'/assets/img/la_carne.jpg'},
    {'id':9,'description':'Capricciosa pizza','p':280,'image':'/assets/img/Pizza_capricciosa.jpg'},
  ]
}
