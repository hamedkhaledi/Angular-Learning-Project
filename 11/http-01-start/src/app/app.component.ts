import { PostsService } from './posts.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Post } from './post.model'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = []
  isFetching = false
  error = null
  private errorSub: Subscription
  constructor(private http: HttpClient, private postsService: PostsService) {}
  ngOnDestroy(): void {
    this.errorSub.unsubscribe()
  }

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe((errorMessage) => {
      this.error = errorMessage
    })
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
        this.isFetching = false
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

  onHandleError() {
    this.error = null
  }
}
