import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: string;
  date: Date;
  currentDate: Date;

  constructor() {}

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.user = "Evolution Fitness"; //temp user

    this.date = new Date();
    this.date.getDate();
  }
}
