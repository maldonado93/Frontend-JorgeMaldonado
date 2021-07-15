import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { BoccModule } from "../models/bocc/bocc.module";
import { map } from 'rxjs/operators';

@Injectable()
export class BoccService {

  constructor(private http:HttpClient) { }
  private urlEndPoint = "https://m4b03ywe18.execute-api.us-east-1.amazonaws.com/dev/express/bocc_customers/800220154";
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  getClientes(): Observable<BoccModule[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as BoccModule[])
    );
  }

}
