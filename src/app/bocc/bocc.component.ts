import { Component, OnInit } from '@angular/core';
import { BoccService } from '../services/bocc.service';
import {BoccModule} from '../models/bocc/bocc.module'

@Component({
  selector: 'app-bocc',
  templateUrl: './bocc.component.html',
  styleUrls: ['./bocc.component.css']
})
export class BoccComponent implements OnInit {

  constructor(private BoccService: BoccService) { }
  clientes: BoccModule[];
  ngOnInit(): void {
    // this.BoccService.getClientes().subscribe(
    //   clientes => this.clientes = clientes
    // )
    
  }
  

}
