import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


@Injectable()
export class ChartService {

    
    items: Observable<any[]>;

    constructor(private db:AngularFireDatabase){
        this.items = db.list('items').valueChanges();
    }

    getData(dataset: string){
        return this.db.list(dataset)
    }


}