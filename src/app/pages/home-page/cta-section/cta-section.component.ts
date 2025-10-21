import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.css'],
  imports: [ButtonComponent,CommonModule]
})
export class CtaSectionComponent implements OnInit {
@Input() label?: string='Contact us';
  @Input() title?: string= 'Start your journey towards smart living';
  @Input() description?: string='At LifeTech, we don\'t just provide smart systems, we give you an integrated lifestyle. We are redefining convenience, security, and control with world-class technologies and local expertise. Get in touch with us today, and let your home begin its journey of smart transformation.';
  @Input() backgroundImage?: string= 'assets/images/cta.png';
  @Input() showButton: boolean = true;
  @Input() buttonText: string = 'Contact us';
  @Input() buttonRoute: string = '/contact';
  @Input() buttonVariant: 'primary' | 'secondary' = 'primary';
  @Input() buttonTitle: string = 'Get in touch with us';
  constructor() { }

  ngOnInit() {
  }

}
