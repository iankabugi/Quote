import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote(1,"A quote a day keeps the doctor away","buggy",new Date(2019,1,16)),
    new Quote(2,"an apple a aday keeps the doctor away","Sarah",new Date(2019,1,14)),
    new Quote(3,"a paper can not stone","james",new Date(2019,1,13)),
  ]
  showDetails=false;
   show(index){
     this.quotes[index].showDetails = !this.quotes[index].showDetails;
   }
   deleteQuote(isComplete,index){
     this.quotes.splice(index,1);
   }

   submitQuote(quote){
    this.quotes.push(quote);
   }
  
  constructor() { }

  ngOnInit() {
  }

}





























