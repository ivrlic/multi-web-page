import { Component, OnInit } from '@angular/core';
import { GreatPersonasService } from '../service/great-personas.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import scrollToTop from 'src/app/services/scroll-to-top';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit{

  persona: any = {}

  constructor(
    private store: GreatPersonasService,
    // check what is activated route
    private route: ActivatedRoute,
    // router to use navigate
    private router: Router){ }

  ngOnInit(): void {
    // checking parameter in the route(url)
    this.route.paramMap.subscribe((params: ParamMap) => {
      // getting id from parameter in url
      const id: number = Number(params.get("id"));

      if (id){
        this.store.getPersona(id).subscribe(p => {
          this.persona = p
        })
      }
    })
    // scroll to top of the window
    scrollToTop()
  }

  goToGreatPersonas(){
    this.router.navigate(["great-personas"])
  }
}
