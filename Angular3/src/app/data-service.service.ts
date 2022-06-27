import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { interval, map,concatMap, Observable, of, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  _x: any[] = [];
  _y: any[] = [];
  _xbpm: any[] = [];
  _ybpm: any[] = [];
  _iter = 0;
  data$: Observable<{x: any[], y:any[]} | null> = of(null);
  bpm$: Observable<{x: any[], y:any[]} | null> = of(null);
  items: Observable<any[]> | undefined;
  values: Observable<{time:any[], measurement_data:any[]} | null> = of(null);
  data: Subscription | undefined;
  array : any[] | undefined;
  array2 : any[] | undefined;
  


  constructor() { }

  connect(db: AngularFireDatabase, userId: any) {
    // Connect to a websocket that regularly pushes data. 
    // Reformat to x/y data to plot.

    this.data$ = db.list('/measure/'+userId,ref =>ref.limitToLast(5)).valueChanges().pipe(
      map(res=>{
        res = res.map(x =>x);
        this.array = res;
        console.log(this.array)
        this._x = this.array.map(array=>array.time);
        this._x = this._x.concat.apply([],this._x)
        this._y = this.array.map(array=>array.measurement_data);
        this._y = this._y.concat.apply([],this._y)
        

        while(this._y.length > 5000) {
          this._x = this._x.slice(1, -1);
          this._y = this._y.slice(1, -1);
        }

        return {
        
          x: this._x,
          y: this._y
          
        };

      })
    )
      
    return this.data$;
  }


  connectbpm(db: AngularFireDatabase, userId: any) {
    this.bpm$ = db.list('/bpm/'+userId,ref =>ref.limitToLast(10)).valueChanges().pipe(
      map(res=>{
        res = res.map(x =>x);
        this.array2 = res;
        console.log(this.array)
        this._xbpm = this.array2.map(array=>array.time);
       // this._xbpm = this._x.concat.apply([],this._xbpm)
        this._ybpm = this.array2.map(array=>array.bpm);
        //this._ybpm = this._y.concat.apply([],this._ybpm)
        

        while(this._y.length > 5000) {
          this._xbpm = this._x.slice(1, -1);
          this._ybpm = this._y.slice(1, -1);
        }

        return {
        
          x: this._xbpm,
          y: this._ybpm
          
        };

      })
    )
      
    return this.bpm$;
  }
}

