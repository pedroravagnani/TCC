import { Component} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable, of } from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent{
  
  trace$: Observable<any> = of(null);
  bpm$: Observable<any> = of(null);
  items: Observable<any[]>;
  data: Observable<any[]>;
  _x: any[] = [];
  _y: any[] = [];

  public graph = {
    layout: {autosize:true,
      title:'ECG'}
  };
  public graph2 = {
    layout: {autosize:true,
      title:'BPM'}
  };


  constructor(db: AngularFireDatabase, private dataService: DataServiceService) {
    this.items = db.list('/',  ref => ref.limitToLast(500)).valueChanges();
    this.data = db.list('/').valueChanges();

    this.trace$ = this.dataService.connect(db, 1).pipe(
      map( (data) =>{
        return {
          ...data,
          type:'scatter'
        }
      })
    )
    
    this.bpm$ = this.dataService.connectbpm(db, 1).pipe(
      map( (data) =>{
        return {
          ...data,
          type:'scatter'
        }
      })
    )

    this.bpm$.forEach(element => console.log(element));

    this.trace$.forEach(element => console.log(element));



/*    if(db.list('/1').valueChanges()){
      this._x=[];
      this._y=[];
      this.data.forEach(element => {
        element.forEach(item => {
          this._x.push(item.time);
          this._y.push(item.measurement_data);
        })
        console.log(this._x);
        console.log(this._y);
      });
    } 
*/

  }

}

