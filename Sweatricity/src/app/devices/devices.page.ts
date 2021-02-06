import { Time } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Device, Generator } from './device.model';
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

  loadedDevice: Generator[] = [];

  loadedDeviceStartTimeArray: string[] = [];
  loadedDeviceStopTimeArray: string[] = [];
  loadedDeviceStatusArray: string[] = [];
  showDetails: boolean = false;
  buttonClicked: string;


  constructor(private devicesService: DevicesService) { }

  @ViewChild("doughnutChartHoursToday") doughnutChartHoursToday: ElementRef;
  private doughnutChart: Chart;

  bars: any;
  colorArray: any;

  ngOnInit() {
    this.devicesService.getGeneratorList('device_0001')
    .then(sub => {
      sub.subscribe((res: Generator[]) => {
        console.log(res)
        this.loadedDevice = res;

        res.forEach(generator => {
          var start_time = new Date(generator.start_time);
          var stop_time = new Date(generator.stop_time);
          var date = new Date();

          this.loadedDeviceStartTimeArray.push(start_time.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: 'numeric', hour12: true  }))
          this.loadedDeviceStopTimeArray.push(stop_time.toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: 'numeric', hour12: true  }))

          if (date.getTime() > start_time.getTime() && date.getTime() < stop_time.getTime()) {
            this.loadedDeviceStatusArray.push('IN USE')
          } else if ((date.getTime() > stop_time.getTime()) || (date.getTime() < start_time.getTime())){
            this.loadedDeviceStatusArray.push('NOT IN USE');
          }  else {
            this.loadedDeviceStatusArray.push('NOT IN USE');
          }
        })
      })
    })
  }

  ionViewWillEnter() {
    // this.loadedDevice = this.devicesService.devices;
  }
  ionViewDidEnter() {
    // this.createDoughnutChart();
  }

  onView(id: string) {
    this.showDetails = !this.showDetails;
    this.buttonClicked = id;
  }

  createDoughnutChart() {
    // this.doughnutChart = new Chart(this.doughnutChartHoursToday.nativeElement, {
    //   type: "doughnut",
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [
    //       {
    //         label: "Current Hours Spent On This Machine Today",
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           "rgba(255, 99, 132, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 0.2)",
    //           "rgba(255, 159, 64, 0.2)"
    //         ],
    //         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
    //       }
    //     ]
    //   }
    // });
  }

}
