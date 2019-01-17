import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();
  quotes=[
    new Quote(1,"A quote a day keeps the doctor away","buggy",new Date(2019,1.16)),
    new Quote(2,"an apple a aday keeps the doctor away","Sarah",new Date(2019,1,14)),
    new Quote(3,"a paper can not stone","james",new Date(2019,1,13)),
  ] 
  upvote=0;
  add(){
  this.upvote = this.upvote +1;
  }
  downvote=0;
  increase(){
  this.downvote = this.downvote +1;  
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  @Input() quote:Quote;
  constructor() { }

  ngOnInit() {
  }

}
