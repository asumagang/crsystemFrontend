import { Component, OnInit } from '@angular/core';
import { Representative } from 'src/app/_models/representative';
import { Observable } from 'rxjs';
import { RepresentativeService } from 'src/app/_services/representative.service';

@Component({
  selector: 'app-representativelist',
  templateUrl: './representativelist.component.html',
  styleUrls: ['./representativelist.component.css']
})
export class RepresentativelistComponent implements OnInit {
  representatives:any=[];

  constructor(private representativeService:RepresentativeService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.representatives= this.representativeService.getAllRepresentatives();

  }

} 
