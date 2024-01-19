import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

// injecting dependencies (e.g. this class) into constructor
// root means that you can inject (use it) in the whole app
@Injectable({
  providedIn: "root"
})

// event bus
export class EventService {
  private subject = new Subject()

  emit(eventName: string, payload: any) {
    this.subject.next({eventName, payload})
  }

  listen(eventName: string, callback: (event: any) => void) {
    this.subject.asObservable().subscribe((nextObj: any) => {
      if(eventName === nextObj.eventName) {
        callback(nextObj.payload)
      }
    })
  }
  
}
