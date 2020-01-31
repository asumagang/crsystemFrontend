import { Component, OnInit } from '@angular/core';
import { ProgramserviceService } from '../_services/programservice.service';
import { Programs } from '../_models/program';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  private programs: Programs[];
  constructor(
    private programService: ProgramserviceService,
  ) { }

  ngOnInit() {
    this.reload();
  }
  reload() {
    this.programService.getPrograms().subscribe(
      programs => {
        console.log(programs);
        this.programs = programs;
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteProgram(programs: Programs): void {
    console.log(programs)
    this.programService.deleteProgram(programs)
      .subscribe( data => {
        this.programs= this.programs.filter(u => u !== programs);
      })
  };

  get totalRows(): number {
    return this.programs.length;
  }
}
