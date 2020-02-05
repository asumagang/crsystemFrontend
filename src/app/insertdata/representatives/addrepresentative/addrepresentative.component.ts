import { Component, OnInit } from '@angular/core';
import { Representative } from 'src/app/_models/representative';
import { Router } from '@angular/router';
import { RepresentativeService } from 'src/app/_services/representative.service';

@Component({
  selector: 'app-addrepresentative',
  templateUrl: './addrepresentative.component.html',
  styleUrls: ['./addrepresentative.component.css']
})
export class AddrepresentativeComponent implements OnInit {
 
  constructor(
    private router:Router, private representativeService:RepresentativeService
  ) { }

  ngOnInit() {
  }

  
  // AddRep(): void {
  //   this.representativeService.AddRep(this.representative)
  //       .subscribe( data => {
  //         alert("Representative created successfully.");
  //       });

  // };
}
