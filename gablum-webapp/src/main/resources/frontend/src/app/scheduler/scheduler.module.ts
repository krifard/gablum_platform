import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { SchedulerRoutingModule } from './scheduler-routing.module';
import {MaterialModule} from './../material/material.module';



@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    MaterialModule
  ]
})
export class SchedulerModule { }
