import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { RestObservableService } from "./rest-observable.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-angular';
  posts: Observable<any>;

  constructor(private restService: RestObservableService) { }

  ngOnInit() {
    this.posts = this.restService.getPosts()
  }
}
