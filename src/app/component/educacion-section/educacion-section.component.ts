import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/service.service';

@Component({
  selector: 'app-educacion-section',
  templateUrl: './educacion-section.component.html',
  styleUrls: ['./educacion-section.component.css']
})
export class EducacionSectionComponent implements OnInit {
  myPortfolio:any;

  constructor(private portfolioData:portfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data =>{
      console.log(data)
      this.myPortfolio=data;
    });
  }

}
