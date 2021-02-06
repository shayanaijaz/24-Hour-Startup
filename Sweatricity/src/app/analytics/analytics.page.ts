import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonSelect } from '@ionic/angular';
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
  @ViewChild('select', {static: false}) select: IonSelect;
  //@ViewChild("barChart3") barChart3: ElementRef;


  private barChartMoneySaved: Chart;
  private barChartEnergy: Chart;
  private doughnutChartBike: Chart;
  private lineChartBike: Chart;
  private lineChartEl: Chart;
  private lineChartRow: Chart;

    bars: any;
    colorArray: any;
    filter: string;
    form: FormGroup;


  constructor() {}

  ngOnInit() {


}

  ionViewWillEnter() {
    this.filter='all';
  }

    ionViewDidEnter() {
      if (this.filter == 'all') {
        this.createBarChart([478, 464, 467, 448, 429, 438, 420, 425, 432, 445, 466, 470], 'Total Money Saved Each Month in Dollars');
        this.createBarChart2([6453, 6264, 6304.5, 6048, 5791.5, 5913, 5670, 5737.5, 5832, 6007.5, 6291, 6345], 'Total Energy Produced Each Month (kW)');
        }
      /*
      if (this.filter == 'bike') {
        this.createBarChart([278, 264, 267, 248, 229, 238, 220, 225, 232, 245, 266, 270], 'Total Money Saved Each Month From Bike Machines');
        this.createBarChart2([3453, 3264, 3304.5, 3048, 2791.5, 2913, 2670, 2737.5, 2832, 3007.5, 3291, 3345], 'Energy Produced Each Month (kW) from Bike Machines');
        }
      if (this.filter == 'el') {
        this.createBarChart([178, 164, 167, 148, 129, 138, 120, 125, 132, 145, 166, 170], 'Total Money Saved Each Month From Elliptical Machines');
        this.createBarChart2([2453, 2264, 2304.5, 2048, 1791.5, 1913, 1670, 1737.5, 1832, 2007.5, 2291, 2345], 'Energy Produced Each Month (kW) From Elliptical Machines');
        }
      if (this.filter == 'row') {
        this.createBarChart([110, 98, 99, 87, 79, 56, 54, 50, 55, 68, 87, 94], 'Total Money Saved Each Month in Dollars');
        this.createBarChart2([1453, 1264, 1304.5, 1048, 791.5, 913, 670, 737.5, 832, 1007.5, 1291, 1345], 'Energy Produced Each Month (kW) From Rowing Machines');
        } */

      //Line graphs
      this.createLineElChart();
      this.createLineRowChart();
      this.createLineBikeChart();
      //this.createDoughnutChart();
    }

    createBarChart(data: number[], label: string) {
      this.barChartMoneySaved = new Chart(this.barChart1.nativeElement, {
        type: 'bar',
        data: {
          labels: ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
            label: label,
            data: data,
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
    createBarChart2(data: number[], label: string) {
      this.barChartEnergy = new Chart(this.barChart2.nativeElement, {
        type: 'bar',
        data: {
          labels: ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
            label: label,
            data: data,
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

    onSelect() {
      console.log(this.select.value);
      this.filter = this.select.value;
      console.log(this.filter);
      if (this.filter === 'all') {
      this.createBarChart([478, 464, 467, 448, 429, 438, 420, 425, 432, 445, 466, 470], 'Total Money Saved Each Month in Dollars');
      this.createBarChart2([6453, 6264, 6304.5, 6048, 5791.5, 5913, 5670, 5737.5, 5832, 6007.5, 6291, 6345], 'Total Energy Produced Each Month (kW)');
      }
      if (this.filter === 'bike') {
        this.createBarChart([278, 264, 267, 248, 229, 238, 220, 225, 232, 245, 266, 270], 'Total Money Saved Each Month From Bike Machines');
        this.createBarChart2([3453, 3264, 3304.5, 3048, 2791.5, 2913, 2670, 2737.5, 2832, 3007.5, 3291, 3345], 'Total Energy Produced Each Month (kW) from Bike Machines');
        console.log('in bike function')
        }
      if (this.filter === 'el') {
        this.createBarChart([178, 164, 167, 148, 129, 138, 120, 125, 132, 145, 166, 170], 'Total Money Saved Each Month From Elliptical Machines');
        this.createBarChart2([2453, 2264, 2304.5, 2048, 1791.5, 1913, 1670, 1737.5, 1832, 2007.5, 2291, 2345], 'Total Energy Produced Each Month (kW) From Elliptical Machines');
        }
      if (this.filter === 'row') {
        this.createBarChart([110, 98, 99, 87, 79, 56, 54, 50, 55, 68, 87, 94], 'Total Money Saved Each Month in Dollars');
        this.createBarChart2([1453, 1264, 1304.5, 1048, 791.5, 913, 670, 737.5, 832, 1007.5, 1291, 1345], 'Total Energy Produced Each Month (kW) From Rowing Machines');
        }
    }
    }
