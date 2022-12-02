import { Component, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
[x: string]: any;


  @Input() p!:Post
  @Output() e!:Post

  eliminaArticolo(id:number) {
    this.postSrv.eliminaPost(id)}
  constructor(private postSrv:PostService) { }

  ngOnInit(): void {
  }

}


