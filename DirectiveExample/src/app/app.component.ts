import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveExample';


  videos=[
    {title:'My Video 1 ',share:415,likes:257,dislikes:12,thumbnail:'assets/thumbnail1.jpg'},
    {title:'My Video 2 ',share:215,likes:325,dislikes:12,thumbnail:'assets/thumbnail2.jpg'},
    {title:'My Video 3 ',share:513,likes:105,dislikes:12,thumbnail:'assets/thumbnail3.jpg'}

  ]
  mostLikedVideo= this.getMostLikedVideo();

  getMostLikedVideo(){

    let videoCopy=[...this.videos];  //The ... is called the spread operator and it's used to create a new array with the same items as this.videos.
    return videoCopy.sort((current,next)=> next.likes -current.likes)[0]; //[0] is used to get the first video in the sorted array. Since we sorted the videos in descending order,
                                                                          //based on likes, the video with the most likes will be at index 0 in the sorted array.
  }
}
