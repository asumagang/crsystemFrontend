import { Injectable } from '@angular/core';
import { Programs } from '../_models/program';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProgramserviceService {
  private baseUrl: string = "http://localhost:8080/api";
  private programs:Programs;


  constructor(private http: HttpClient) { }
  

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  getPrograms(): Observable<Programs> {
    return this.http.get<Programs>(this.baseUrl + "/programs").pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  deleteProgram(id) {
    return this.http
      .delete<Programs>(this.baseUrl + "/programs/" + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  setter(programs:Programs){
    this.programs=programs;
  }
  getter(){
    return this.programs;
  }
}
