import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[][];
  currentPage: number;
  constructor() { } // used for dependency injection

  ngOnInit() { // best practive
    this.currentPage = 0;
    this.blogPost = [
      [
      {title: 'Post 1',
      summary: ' Lorem ipsum dolor sit amet, cosnsecteur adipiscing elite'},
        {title: 'Post 2',
        summary: ' Lorem ipsum dolor sit amet, cosnsecteur adipiscing elite'},
          {title: 'Post 3',
          summary: ' Lorem ipsum dolor sit amet, cosnsecteur adipiscing elite'},
            {title: 'Post 4',
            summary: ' Lorem ipsum dolor sit amet, cosnsecteur adipiscing elite'},
            ],
            [
              {title: 'Post 5',
              summary: ' Lorem ipsum dolor sit amet, cosnsecteur adipiscing elite'},
                {title: 'Post 6',
                summary: ' Lorem ipsum dolor sit amet, cosnsecteur adipiscing elite'},
                  {title: 'Post 7',
                  summary: ' Lorem ipsum dolor sit amet, cosnsecteur adipiscing elite'},
                    {title: 'Post 8',
                    summary: ' Lorem ipsum dolor sit amet, cosnsecteur adipiscing elite'},
                    ],
                    [
                      {title: 'Post 9',
                      summary: ' Lorem ipsum dolor sit amet, cosnsecteur adipiscing elite'},
                        {title: 'Post 10',
                        summary: ' Lorem ipsum dolor sit amet, cosnsecteur adipiscing elite'},
                          {title: 'Post 11',
                          summary: ' Lorem ipsum dolor sit amet, cosnsecteur adipiscing elite'},
                            {title: 'Post 12',
                            summary: ' Lorem ipsum dolor sit amet, cosnsecteur adipiscing elite'},
                            ],
    ];
  }
  updatePage(newPage) {
    this.currentPage = newPage;
  }

}
