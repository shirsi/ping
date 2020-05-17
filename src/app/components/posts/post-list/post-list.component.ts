import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
posts = [{title: 'Post 1', content: 'Content 1'}, {title: 'Post 2', content:}]
  constructor() { }

  ngOnInit(): void {
  }

}
