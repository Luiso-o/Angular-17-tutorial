import { Component } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule,CommentsComponent, NgOptimizedImage],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {

}
