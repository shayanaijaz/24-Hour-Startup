import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicesPageRoutingModule } from './devices-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { DevicesPage } from './devices.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicesPageRoutingModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  declarations: [DevicesPage]
})
export class DevicesPageModule {}
