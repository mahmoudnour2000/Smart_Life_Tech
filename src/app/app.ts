import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageSwitcherComponent } from "./shared/components/language-switcher/language-switcher.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LanguageSwitcherComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('SmartLifeTech');
    constructor(private translate: TranslateService) {
    // Set default language
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    // Get saved language or use default
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLang = localStorage.getItem('language') || 'en';
      this.translate.use(savedLang);
      this.updateDirection(savedLang);
    } else {
      this.translate.use('en');
      this.updateDirection('en');
    }
  }

 updateDirection(lang: string): void {
  if (typeof document === 'undefined') return; 

  const htmlTag = document.documentElement;
  if (lang === 'ar') {
    htmlTag.setAttribute('dir', 'rtl');
    htmlTag.setAttribute('lang', 'ar');
  } else {
    htmlTag.setAttribute('dir', 'ltr');
    htmlTag.setAttribute('lang', 'en');
  }
}

}
