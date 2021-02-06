import { Time } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Device } from './device.model';
import { DevicesService } from './devices.service';
import { Chart } from "chart.js";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {
  id: string;
  device: string;
  startTime: Time;
  endTime: Time;

  loadedDevice: Device[];
  showDetails: boolean = false;
  buttonClicked: string;


  constructor(private devicesService: DevicesService) { }

  @ViewChild("doughnutChartHoursToday") doughnutChartHoursToday: ElementRef;
  private doughnutChart: Chart;

  bars: any;
  colorArray: any;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadedDevice = this.devicesService.devices;
  }
  ionViewDidEnter() {
  }

  onView(id: string) {
    this.showDetails = !this.showDetails;
    this.buttonClicked = id;
    this.createDoughnutChart();
  }

  createDoughnutChart() {
    this.doughnutChart = new Chart(this.doughnutChartHoursToday.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Current Hours Spent On This Machine Today",
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
  }

}
