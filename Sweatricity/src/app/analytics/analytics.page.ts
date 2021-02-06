import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {


  @ViewChild("lineChart1") lineChart1: ElementRef;
  @ViewChild("lineChart2") lineChart2: ElementRef;
  @ViewChild("lineChart3") lineChart3: ElementRef;
  @ViewChild('barChart1') barChart1: ElementRef;
  @ViewChild("barChart2") barChart2: ElementRef;
  //@ViewChild("barChart3") barChart3: ElementRef;


  private barChartMoneySaved: Chart;
  private barChartEnergy: Chart;
  private doughnutChartBike: Chart;
  private lineChartBike: Chart;
  private lineChartEl: Chart;
  private lineChartRow: Chart;

    bars: any;
    colorArray: any;

  constructor() {}

  ngOnInit() { }
  ionWillEnter() {

  }

    ionViewDidEnter() {
      this.createBarChart();
      this.createBarChart2();
      this.createLineElChart();
      this.createLineRowChart();

      this.createLineBikeChart();
      //this.createDoughnutChart();
    }

    createBarChart() {
      this.barChartMoneySaved = new Chart(this.barChart1.nativeElement, {
        type: 'bar',
        data: {
          labels: ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
            label: 'Total Money Saved Each Month',
            data: [529, 488, 440, 454, 478, 500, 508, 519, 507, 499, 480, 470],
            backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
    createBarChart2() {
      this.barChartEnergy = new Chart(this.barChart2.nativeElement, {
        type: 'bar',
        data: {
          labels: ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
            label: 'Total Energy Produced Each Month (',
            data: [529, 488, 440, 454, 478, 500, 508, 519, 507, 499, 480, 470],
            backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
/*
      createDoughnutChart() {
      this.doughnutChartBike = new Chart(this.doughnutChart1.nativeElement, {
        type: "doughnut",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
            }
          ]
        }
      });
    } */
    createLineBikeChart() {
      this.lineChartBike = new Chart(this.lineChart1.nativeElement, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "Monthly Total Hours Spent on Bike Machines",
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
              data: [13500, 14078, 14826, 14990, 15238, 15893, 16043],
              spanGaps: false
            }
          ]
        }
      });
    }
    createLineElChart() {
      this.lineChartEl = new Chart(this.lineChart2.nativeElement, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "Monthly Total Hours Spent on Elliptical Machines",
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
              data: [6820, 7289, 8475, 8999, 9030, 10500, 11399],
              spanGaps: false
            }
          ]
        }
      });
    }
    createLineRowChart() {
      this.lineChartRow = new Chart(this.lineChart3.nativeElement, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "Monthly Total Hours Spent on Rowing Machines",
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
              data: [1980, 2010, 2120, 2290, 2408, 2803, 3108],
              spanGaps: false
            }
          ]
        }
      });
    }
    }
