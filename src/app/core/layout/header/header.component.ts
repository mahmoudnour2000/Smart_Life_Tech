import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { NavItem } from '../../models/layout';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
    imports: [CommonModule, RouterModule, ButtonComponent, TranslateModule],
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
    {label:'home', route:''},
    { label: 'smartHomes', route: '/smart-homes'},
    { label: 'products', route: '/products' },
    { label: 'solutions', route: '/solutions'},
    { label: 'blog', route: '/blog' },
    { label: 'contact', route: '/contact' },
    { label: 'bePartner', route: '/partner'},
    { label: 'about', route: '/about' }
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
