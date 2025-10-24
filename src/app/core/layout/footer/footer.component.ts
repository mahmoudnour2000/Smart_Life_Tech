import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactInfo, FooterSection, SocialMedia } from '../../models/layout';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
    imports: [CommonModule, RouterModule, TranslateModule],

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
      title: 'footer.sections.ourWebsite.title',
      links: [
        { label: 'footer.sections.ourWebsite.links.lifeTech', route: '/' },
        { label: 'footer.sections.ourWebsite.links.smartHomes', route: '/smart-homes' },
        { label: 'footer.sections.ourWebsite.links.products', route: '/products' },
        { label: 'footer.sections.ourWebsite.links.solutions', route: '/solutions' },
        { label: 'footer.sections.ourWebsite.links.blog', route: '/blog' },
        { label: 'footer.sections.ourWebsite.links.contact', route: '/contact' },
        { label: 'footer.sections.ourWebsite.links.bePartner', route: '/partner' },
        { label: 'footer.sections.ourWebsite.links.about', route: '/about' }
      ]
    },
    {
      title: 'footer.sections.smartHomes.title',
      links: [
        { label: 'footer.sections.smartHomes.links.soundSystem', route: '/smart-homes/sound-system' },
        { label: 'footer.sections.smartHomes.links.lighting', route: '/smart-homes/lighting' },
        { label: 'footer.sections.smartHomes.links.climate', route: '/smart-homes/climate' },
        { label: 'footer.sections.smartHomes.links.motor', route: '/smart-homes/motor' },
        { label: 'footer.sections.smartHomes.links.security', route: '/smart-homes/security' },
        { label: 'footer.sections.smartHomes.links.glass', route: '/smart-homes/glass' }
      ]
    },
    {
      title: 'footer.sections.ourSolutions.title',
      links: [
        { label: 'footer.sections.ourSolutions.links.building', route: '/solutions/building' },
        { label: 'footer.sections.ourSolutions.links.home', route: '/solutions/home' },
        { label: 'footer.sections.ourSolutions.links.hotel', route: '/solutions/hotel' },
        { label: 'footer.sections.ourSolutions.links.hospital', route: '/solutions/hospital' }
      ]
    }
  ];

  @Input() contactInfo: ContactInfo[] = [
    { type: 'email', value: 'Info@lifetech.sa', icon: 'assets/images/email_Icon.png' },
    { type: 'phone', value: '966537733222+', icon: 'assets/images/phone_Icon.png' },
    { type: 'phone', value: '966537733222+', icon: 'assets/images/phone_Icon.png' },
    { type: 'address', value: 'Riyadh, Al-Rabwah District, Al-Mukhtar Bin Bieh', icon: 'assets/images/location_Icon.png' },
    { type: 'address', value: 'Jeddah, Al-Hamra District, Palestine Street.', icon: 'assets/images/location_Icon.png' }
  ];

  @Input() socialMedia: SocialMedia[] = [
    { name: 'Telegram', icon: 'assets/images/telegram_icon.png', url: 'https://t.me/lifetech', ariaLabel: 'Visit our Telegram channel' },
    { name: 'YouTube', icon: 'assets/images/youtube_icon.png', url: 'https://youtube.com/@lifetech', ariaLabel: 'Visit our YouTube channel' },
    { name: 'WhatsApp', icon: 'assets/images/whatsapp_icon.png', url: 'https://wa.me/966537733222', ariaLabel: 'Contact us on WhatsApp' },
    { name: 'X (Twitter)', icon: 'assets/images/twitter_icon.png', url: 'https://x.com/lifetech', ariaLabel: 'Follow us on X' },
    { name: 'TikTok', icon: 'assets/images/tiktok_icon.png', url: 'https://tiktok.com/@lifetech', ariaLabel: 'Follow us on TikTok' },
    { name: 'Instagram', icon: 'assets/images/insta_icon.png', url: 'https://instagram.com/lifetech', ariaLabel: 'Follow us on Instagram' },
    { name: 'Facebook', icon: 'assets/images/facebook_icon.png', url: 'https://facebook.com/lifetech', ariaLabel: 'Follow us on Facebook' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
