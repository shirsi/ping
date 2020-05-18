import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  enteredTitle: string = '';
  enteredContent: string = '';
  @Output() postCreated = new EventEmitter();
  onAddPost() {
    const post = { title: this.enteredTitle, content: this.enteredContent };
    console.log(post);
    this.postCreated.emit(post);
  }
  constructor() {}

  ngOnInit(): void {}
}
