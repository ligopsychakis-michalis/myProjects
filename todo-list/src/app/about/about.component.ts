import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  activeTab: string = this.router.url.split('about/')[1];

  constructor(private router: Router) { 
    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => { 
      this.activeTab = this.router.url.split('about/')[1];
    })
  }

  ngOnInit(): void {}
}
