import { Component, OnInit } from '@angular/core';
import scrollToTop from 'src/app/services/scroll-to-top';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{
  ngOnInit(): void {
    // scroll to top of the window
    scrollToTop()
  }
}
