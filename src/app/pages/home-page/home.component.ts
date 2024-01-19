import { Component, OnInit } from '@angular/core';
import scrollToTop from 'src/app/services/scroll-to-top';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    // scroll to top of the window
    scrollToTop()
  }
}
