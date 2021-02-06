import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: string;
  date: Date;
  currentDate: Date;
  @ViewChild("lineChart1") lineChart1: ElementRef;
  private lineChartEl: Chart;

  constructor() {}

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.user = "Evolution Fitness"; //temp user

    this.date = new Date();
    this.date.getDate();
  }

  ionViewDidEnter() {
    this.createLineElChart();
  }

  createLineElChart() {
    this.lineChartEl = new Chart(this.lineChart1.nativeElement, {
      type: "line",
      data: {
        labels: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'  ],
        datasets: [
          {
            label: "Hourly Energy Production",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0.4, 0.5, 0.45, 0.5, 0.5, 0.65, 0.5, 0.6, 0.6, 0.7, 0.65, 0.75, 0.7],
            spanGaps: false
          }
        ]
      }
    });
  }
}
