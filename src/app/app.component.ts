import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TimelineModule, TimelineItemModel} from '@syncfusion/ej2-angular-layouts';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimelineModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public orderStatus: TimelineItemModel[] = [
    {content: 'Shipped', oppositeContent:'09:15 AM, January 01, 2024', cssClass:'state-success state-completed'},
    {content: 'Departed', oppositeContent:'12:00 PM, January 04, 2024', cssClass:'state-success state-completed'},
    {content: 'Arrived', oppositeContent:'07:15 AM, January 07, 2024', cssClass:'state-inprogress state-intermediate'},
    {content: 'Out for Delivery', oppositeContent:'Estimated delivery by 09:20 AM', disabled: true}
  ];
}
