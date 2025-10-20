import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { NavItem } from '../../models/layout';


@Component({
  selector: 'app-header',
    imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Input() logoImage: string = 'assets/images/Logo.png';
  @Input() logoAlt: string = 'LifeTech Logo';
  @Input() logoWidth: number = 150;
  @Input() logoHeight: number = 40;
  @Input() logoRoute: string = '/';
  
  @Input() navItems: NavItem[] = [
    { label: 'Smart Homes', route: '/smart-homes'},
    { label: 'Products', route: '/products' },
    { label: 'Solutions', route: '/solutions'},
    { label: 'Blog', route: '/blog' },
    { label: 'Contact Us', route: '/contact' },
    { label: 'Be a Partner', route: '/partner'},
    { label: 'About Us', route: '/about' }
  ];

  @Input() ctaButtonText: string = 'know more';
  @Input() ctaButtonRoute: string = '/know-more';

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}
