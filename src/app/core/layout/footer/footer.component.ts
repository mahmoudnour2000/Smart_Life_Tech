import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactInfo, FooterSection, SocialMedia } from '../../models/layout';

@Component({
  selector: 'app-footer',
    imports: [CommonModule, RouterModule],

  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 @Input() logoImage: string = 'assets/images/Logo.png';
  @Input() logoAlt: string = 'LifeTech Logo';
  @Input() logoWidth: number = 150;
  @Input() logoHeight: number = 40;
    @Input() backgroundImage: string = 'assets/images/footerbg.png';

  @Input() companyDescription: string = 'A company specialized in providing advanced products and solutions for buildings, hospitals, hotels, and smart homes in Saudi Arabia using Moorgen\'s advanced and exclusive products and devices of Smart Life Tech and adoption the technologies and system of the Smart Home System and advanced technology.';
  
  @Input() copyrightText: string = '@ All rights reserved to LifeTech';

  @Input() footerSections: FooterSection[] = [
    {
      title: 'Our website',
      links: [
        { label: 'Life Tech', route: '/' },
        { label: 'Smart Homes', route: '/smart-homes' },
        { label: 'Products', route: '/products' },
        { label: 'Solutions', route: '/solutions' },
        { label: 'Blog', route: '/blog' },
        { label: 'Contact us', route: '/contact' },
        { label: 'Be a partner', route: '/partner' },
        { label: 'About us', route: '/about' }
      ]
    },
    {
      title: 'Smart Homes',
      links: [
        { label: 'Sound System Solutions', route: '/smart-homes/sound-system' },
        { label: 'Lighting Controls', route: '/smart-homes/lighting' },
        { label: 'Climate Control', route: '/smart-homes/climate' },
        { label: 'Motor Control', route: '/smart-homes/motor' },
        { label: 'Security Systems', route: '/smart-homes/security' },
        { label: 'Smart Glass', route: '/smart-homes/glass' }
      ]
    },
    {
      title: 'Our Solutions',
      links: [
        { label: 'Building Solutions', route: '/solutions/building' },
        { label: 'Home Solutions', route: '/solutions/home' },
        { label: 'Hotel Solutions', route: '/solutions/hotel' },
        { label: 'Hospital Solutions', route: '/solutions/hospital' }
      ]
    }
  ];

  @Input() contactInfo: ContactInfo[] = [
    { type: 'email', value: 'Info@lifetech.sa', icon: '✉' },
    { type: 'phone', value: '966537733222+', icon: '📞' },
    { type: 'phone', value: '966537733222+', icon: '📞' },
    { type: 'address', value: 'Riyadh, Al-Rabwah District, Al-Mukhtar Bin Bieh', icon: '📍' },
    { type: 'address', value: 'Jeddah, Al-Hamra District, Palestine Street.', icon: '📍' }
  ];

  @Input() socialMedia: SocialMedia[] = [
    { name: 'Telegram', icon: '📱', url: 'https://t.me/lifetech', ariaLabel: 'Visit our Telegram channel' },
    { name: 'YouTube', icon: '▶️', url: 'https://youtube.com/@lifetech', ariaLabel: 'Visit our YouTube channel' },
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/966537733222', ariaLabel: 'Contact us on WhatsApp' },
    { name: 'X (Twitter)', icon: '✖️', url: 'https://x.com/lifetech', ariaLabel: 'Follow us on X' },
    { name: 'TikTok', icon: '🎵', url: 'https://tiktok.com/@lifetech', ariaLabel: 'Follow us on TikTok' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/lifetech', ariaLabel: 'Follow us on Instagram' },
    { name: 'Facebook', icon: 'f', url: 'https://facebook.com/lifetech', ariaLabel: 'Follow us on Facebook' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
