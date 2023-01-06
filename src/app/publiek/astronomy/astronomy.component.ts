import { Component, Input } from '@angular/core';
import { Astro } from 'src/app/core/models/weather';

@Component({
  selector: 'app-astronomy',
  templateUrl: './astronomy.component.html',
})
export class AstronomyComponent {
  @Input() astro!: Astro;
}
