import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graficomascota',
  standalone: true,
  imports: [],
  templateUrl: './graficomascota.component.html',
  styleUrl: './graficomascota.component.scss'
})
export class GraficomascotaComponent implements OnInit  {

  public chart: Chart | undefined;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
