import { PostsService } from './posts.service'
import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { templateJitUrl } from '@angular/compiler'
import { map } from 'rxjs/operators'
import { Post } from './post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = []
  isFetching = false
  error = null
  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts()
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    this.isFetching = true
    // Send Http request
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false
        this.loadedPosts = posts
      },
      (error) => {
        this.error = error.message
      },
    )
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = []
    })
  }
}
