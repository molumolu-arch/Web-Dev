import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  imports: [],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {

  likes: number = 0;
  constructor(){
    this.likes = 0;
  }

  like(){
    console.log("liked")
    this.likes+=1;
  }

}
