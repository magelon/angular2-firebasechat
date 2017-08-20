import { Component } from '@angular/core';

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 items:FirebaseListObservable<any[]>;
 name:any;
 msgVal:string='';
 user: Observable<firebase.User>;
 error:any;
 constructor(public afdb:AngularFireDatabase,public afAuth:AngularFireAuth){
  
  afAuth.authState.subscribe(auth=>{
    if(auth){
      this.name=auth.displayName;
    }
  })

  this.user=afAuth.authState;

  this.items=afdb.list('/messages',{
     query:{
       limitToLast:5
      }
     }
   )

 }

logout(){
  this.afAuth.auth.signOut().catch((err)=>{
    this.error=err;
  })
}

 login(){
  this.afAuth.auth.signInWithPopup(
    new firebase.auth.FacebookAuthProvider()
  ).catch((err)=>{
    this.error=err;
  }
  )
}

chatSend(theirMessage:string){
  this.items.push(
    {
      message:theirMessage,
      name:this.name
    }
  )
  this.msgVal='';
}
 




}
