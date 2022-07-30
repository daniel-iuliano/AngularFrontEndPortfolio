import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/service.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  myPortfolio:any;

  constructor(private portfolioData:portfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data =>{
      console.log(data)
      this.myPortfolio=data;
    });
  }

}