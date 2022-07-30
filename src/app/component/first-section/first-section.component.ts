import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/service.service';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {
  myPortfolio:any;

  constructor(private portfolioData:portfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data =>{
      console.log(data)
      this.myPortfolio=data;
    });
  }

}