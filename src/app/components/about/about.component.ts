import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit, OnDestroy {

  private aboutSubscription$: Subscription | undefined;
  public aboutData:any = [];
  
  constructor(private _aboutSrv: AboutService) { }
  

  ngOnInit(): void {
    this.aboutSubscription$ = this._aboutSrv.fetchCountryList().
    subscribe( data => {
      this.aboutData = data.response;
    });
  }

  ngOnDestroy(): void {
      this.aboutSubscription$?.unsubscribe();
  }

}
