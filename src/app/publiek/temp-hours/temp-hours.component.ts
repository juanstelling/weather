import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-hours',
  templateUrl: './temp-hours.component.html',
})
export class TempHoursComponent implements OnInit {
  @Input() temphours!: any;
  currentTime!: number;
  now = new Date();

  ngOnInit(): void {
    this.currentTime = this.now.getHours();
  }
}
