import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClickService } from 'src/app/services/click.service';


@Component({
  selector: 'app-susan',
  templateUrl: './susan.component.html',
  styleUrls: ['./susan.component.css'],
  providers: [ClickService]
})
export class SusanComponent implements OnInit {

  constructor(private router: Router, private clickService: ClickService) { }

  ngOnInit(): void {
  }

  onAbout() {
    //this.router.navigate(['/about']); //this is an absolute path programmatic//switched to services 101222
    this.clickService.onAboutClick();
  }
}
