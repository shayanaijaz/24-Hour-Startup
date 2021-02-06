

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

export interface Generator {
    device_id: string;
    equipment: string;
    id:        string;
    output_frequency: string;
    start_time: string;
    stop_time: string;
    status: string;
}
