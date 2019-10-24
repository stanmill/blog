import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[] = [];
  constructor() { } // used for dependency injection

  ngOnInit() { // best practive
    this.blogPost.push(new BlogPost('Blog post 1', 'summary 1'));
    this.blogPost.push(new BlogPost('Blog post 2', 'summary 2'));
    this.blogPost.push(new BlogPost('Blog post 3', 'summary 3 alkavsjdlfnksdfdslknvsdflksldfl'));
  }

}
