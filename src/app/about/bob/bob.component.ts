import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClickService } from 'src/app/services/click.service';

@Component({
  selector: 'app-bob',
  templateUrl: './bob.component.html',
  styleUrls: ['./bob.component.css'],
  providers: [ClickService]
})
export class BobComponent implements OnInit {

  constructor(private router: Router, private clickService: ClickService) { }

  ngOnInit(): void {
  }

  onAbout() {
    //this.router.navigate(['/about']);///switched to services 101222
    this.clickService.onAboutClick();
  }

}
