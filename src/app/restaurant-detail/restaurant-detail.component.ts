import { RestaurantsService } from './../restaurant/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurant/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(
    private restaurantsService : RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
                           .subscribe(restaurant => this.restaurant = restaurant);
  }

}
