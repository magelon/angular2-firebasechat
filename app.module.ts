import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms';
import {HttpModule}from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';

export const firebaseConfig = {
  apiKey: "AIzaSyCuI-sB3Clw21TVrZQjce9GUdTHsB8_S64",
  authDomain: "angularchat-ec59b.firebaseapp.com",
  databaseURL: "https://angularchat-ec59b.firebaseio.com",
  projectId: "angularchat-ec59b",
  storageBucket: "angularchat-ec59b.appspot.com",
  messagingSenderId: "316499766380"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
