import { Component, OnInit } from '@angular/core';
import { portfolioService } from 'src/app/services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myPortfolio:any;

  constructor(private portfolioData:portfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data =>{
      console.log(data)
      this.myPortfolio=data;
    });
  }

}
