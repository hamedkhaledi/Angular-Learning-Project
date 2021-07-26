import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  private firstObsSubscription: Subscription
  constructor() { }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe()
  }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count =>{
    //   console.log(count)
    // })
    const customIntervalObservable = Observable.create(observer =>{
      let count = 0;
      setInterval(() =>{observer.next(count),count++},1000)
    });
    this.firstObsSubscription = customIntervalObservable.subscribe(data=>{
      console.log(data)
    })
  }

}
