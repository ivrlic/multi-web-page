import { Component, OnInit } from '@angular/core';
import scrollToTop from 'src/app/services/scroll-to-top';
import { GreatPersonasService } from './service/great-personas.service';

@Component({
  selector: 'great-personas',
  templateUrl: './great-personas.component.html',
  styleUrls: ['./great-personas.component.css']
})
export class GreatPersonasComponent implements OnInit{

  personasList: any = []

  constructor(private store: GreatPersonasService) { }

  ngOnInit(): void {
    console.log("great-personas-page")
    this.store.getGreatPersonas().subscribe((data)=>{
      this.personasList = data
    })
    // scroll to top of the window
    scrollToTop()
  }
}
