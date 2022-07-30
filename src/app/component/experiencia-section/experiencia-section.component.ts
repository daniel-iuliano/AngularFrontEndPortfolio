import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/service.service';

@Component({
  selector: 'app-experiencia-section',
  templateUrl: './experiencia-section.component.html',
  styleUrls: ['./experiencia-section.component.css']
})
export class ExperienciaSectionComponent implements OnInit {
  myPortfolio:any;

  constructor(private portfolioData:portfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data =>{
      console.log(data)
      this.myPortfolio=data;
    });
  }

}
