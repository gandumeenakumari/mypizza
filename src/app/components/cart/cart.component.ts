import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/order.model';
import { ordersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Orders:Orders[]=[];
  constructor(private ordersService:ordersService) { }

  ngOnInit(): void {
    this.ordersService.getAllOrders()
    .subscribe({
      next:(Orders)=>
      {
        this.Orders=Orders;
        
      }
    })
  }

}
