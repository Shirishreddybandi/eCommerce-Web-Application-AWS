import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  imgUrl: string;
}

interface Order {
  id: number;
  dateCreated: string;
  total: number;
  orderItems: OrderItem[];
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('user_id');
    const access_token = localStorage.getItem('access_token');

    if (userId && access_token) {
      this.orderService.getOrdersByUserId(userId, access_token).subscribe(
        (response: any) => {
          this.orders = response as Order[];
        },
        (error) => {
          console.error('Failed to fetch orders:', error);
        }
      );
    }
  }
}
