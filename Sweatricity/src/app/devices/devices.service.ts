import { Injectable } from '@angular/core';
import { Device } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor() { }

  private _devices: Device[] =[
    {
      deviceId: '10101332',
      inputId: ['123', '445'],
      status: 'live',
      deviceName: 'elliptical',
      startTime: '',
      endTime: '',
    },
    {
      deviceId: '0393033',
      inputId: ['123', '445'],
      status: 'live',
      deviceName: 'biking',
      startTime: '',
      endTime: '',
  },
  {
    deviceId: '92848493',
    inputId: ['123', '445'],
    status: 'live',
    deviceName: 'rowing',
    startTime: '',
    endTime: '',
}
];

get devices() {
    return [...this._devices];
}
}
