import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }

  ngOnInit(): void {
  }
  menu=[
    {'id':2,'name':'Mushroom Pepper','description':'₹200','image':'/assets/img/mushroom_pepper.jpg'},
    {'id':1,'name':'Margarita','description':'₹300','image':'/assets/img/margarita.jpg'},
    {'id':3,'name':'Tomato Onion','description':'₹200','image':'/assets/img/tomato_onion.jpg'},
    {'id':4,'name':'Tomato_Onion_Bellpepper','description':'₹200','image':'/assets/img/tomato_onion_bellpepper.jpg'},
    {'id':5,'name':'Vegetables','description':'₹150','image':'/assets/img/vegetables.jpg'},
    {'id':6,'name':'Vegetables Hurbs','description':'₹250','image':'/assets/img/vegetables_hurbs.jpg'},
    {'id':7,'name':'Tomato_Mozzarella','description':'300','image':'/assets/img/tomato_mozzarella.jpg'},
    {'id':9,'name':'Arugula_tomato_onion','description':'400','image':'/assets/img/arugula_tomato_onion.jpg'},
    {'id':8,'name':'Paneer','description':'250','image':'/assets/img/paneer.jpg'},
  ]

}