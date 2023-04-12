import { Component, ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {
  private images: string[] = ["http://localhost/1.jpg", "http://localhost/2.jpg", "http://localhost/3.jpg", "http://localhost/4.jpg", "http://localhost/5.jpg", "http://localhost/6.jpg", "http://localhost/7.jpg", "http://localhost/copy.png"];
  private currentIndex: number = 0;
  @ViewChild('slideshow') slideshow!: ElementRef<HTMLImageElement>
  constructor() {
    setInterval(() => {
      this.slideshow.nativeElement.src = this.images[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000);
  }
}
