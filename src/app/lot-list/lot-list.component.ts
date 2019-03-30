import { Component, OnInit } from '@angular/core'
import {Lot} from '../Lot'
import {LotService} from '../services/lot.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-lot-list',
  templateUrl: './lot-list.component.html',
  styleUrls: ['./lot-list.component.css']
})
export class LotListComponent implements OnInit {

  lots: Lot[]

  constructor(private lotService: LotService) { }

  ngOnInit() {
    this.loadLots()
    timer(0, 10000).subscribe( _ => this.loadLots() )
  }

  loadLots() {
    this.lotService.getGlobalLots()
      .subscribe( res => {
        const lots = res
        console.log(lots)
        this.lots = lots
      }, err => {
        alert(err)
      } )
  }

}
