import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-smart-control',
  imports:[CommonModule, TranslateModule],
  templateUrl: './smart-control.component.html',
  styleUrls: ['./smart-control.component.css']
})
export class SmartControlComponent implements OnInit {
@Input() title?: string="Smart control at your fingertips";
  @Input() subtitle?: string;
  @Input() descriptionParagraphs: string[] = ['paragraph1', 'paragraph2', 'paragraph3'];
  @Input() image: string ='assets/images/app-mockup.png';
  @Input() imagePosition: 'left' | 'right' = 'left';
  @Input() appStoreLink?: string="''";
  @Input() playStoreLink?: string="''";
  @Input() appStoreImage?: string='assets/images/app-store-badge.png';
  @Input() playStoreImage?: string='assets/images/google-play-badge.png';
  
  constructor() { }

  ngOnInit() {
  }

}
