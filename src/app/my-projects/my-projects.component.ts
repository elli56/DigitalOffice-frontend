import { Component, OnInit } from '@angular/core';
import { Input} from "@angular/core";


@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor() { }

  //data
  @Input() projectName;
  @Input() consumer;
  @Input() comment;
  @Input() myHours;       //my contribution
  @Input() participants;  //array with photo of participants

  amountHiddenPhoto = 0;

  ngOnInit() {

    //determining the number of participants whose photos are not shown
    this.amountHiddenPhoto = this.participants.length - 4;


  }

}
