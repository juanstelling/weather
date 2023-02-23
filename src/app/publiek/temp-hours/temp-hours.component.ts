import { Component, Input, OnInit } from '@angular/core';
import { Hour } from 'src/app/core/models/weather';

@Component({
  selector: 'app-temp-hours',
  templateUrl: './temp-hours.component.html',
})
export class TempHoursComponent implements OnInit {
  @Input() temphours!: Hour[];
  currentTime!: number;
  now = new Date();

  ngOnInit(): void {
    this.currentTime = this.now.getHours();
  }
}
