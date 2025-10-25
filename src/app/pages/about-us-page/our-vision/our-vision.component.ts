import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-vision',
  templateUrl: './our-vision.component.html',
  styleUrls: ['./our-vision.component.css'],
  imports: [TranslateModule]
})
export class OurVisionComponent implements OnInit {

  imageUrl: string = 'assets/images/vision.png';
  imageAlt: string = 'Smart Life Tech Team';

  constructor() { }

  ngOnInit() {
  }

}
