import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
    imports: [CommonModule, RouterModule],

  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
 @Input() text: string = '';
  @Input() route: string = '/';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() title: string = '';
  constructor() { }

  ngOnInit() {
  }

}
