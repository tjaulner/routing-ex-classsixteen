import { Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  onAboutClick() {
  this.router.navigate(['/about']);
  }

  onProductClick() {
    this.router.navigate(['/home']);
  }

}
