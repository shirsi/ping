import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  enteredPost: string = '';
  newPost: string = 'No content';
  onAddPost() {
    this.newPost = this.enteredPost;
  }
  constructor() {}

  ngOnInit(): void {}
}
