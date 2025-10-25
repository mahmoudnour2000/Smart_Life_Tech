import { Component, Input, OnInit } from '@angular/core';
import { ValueCard } from '../../../core/models/about-us';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-simple-cards',
  imports:[CommonModule, TranslateModule],
  templateUrl: './simple-cards.component.html',
  styleUrls: ['./simple-cards.component.css']
})
export class SimpleCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() ariaLabel: string = 'Our values section';
}
