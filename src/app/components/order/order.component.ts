import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from 'src/app/models/order.model';
import { ordersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class orderComponent implements OnInit {
  addOrderRequest:Orders=
  {
    orderid:'',
    category:'',
    pizzaname:'',
    price:0
  };

  constructor(private route:ActivatedRoute,private ordersService:ordersService,private router:Router) { }

ngOnInit(): void {

}
addOrders()
  {
    this.ordersService.addOrders(this.addOrderRequest)
    .subscribe({
      next:(Orders)=>
      {
        console.log("add item method called");
        this.router.navigate(['Cart']);
      }
    })
  }
}