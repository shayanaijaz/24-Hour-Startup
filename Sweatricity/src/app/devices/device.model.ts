import { Time } from "@angular/common";

export class Device {
  constructor(
      public deviceId: string,
      public inputId: string[],
      public status: string,
      public deviceName: string,
      public startTime: string,
      public endTime: string
  ) {}
}
