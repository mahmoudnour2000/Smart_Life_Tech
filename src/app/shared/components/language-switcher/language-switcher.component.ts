import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit {

   currentLang: string = 'en';
  isOpen: boolean = false;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Get current language from localStorage or default to 'en'
    if (typeof window !== 'undefined' && window.localStorage) {
      this.currentLang = localStorage.getItem('language') || 'en';
    } else {
      this.currentLang = 'en';
    }
    this.translate.use(this.currentLang);
    this.updateDirection();
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  changeLanguage(lang: 'en' | 'ar'): void {
    this.currentLang = lang;
    this.translate.use(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('language', lang);
    }
    this.updateDirection();
    this.isOpen = false;
  }

  updateDirection(): void {
  if (typeof document === 'undefined') return; // 🧠 تأكيد إننا في المتصفح

  const htmlTag = document.documentElement;
  if (this.currentLang === 'ar') {
    htmlTag.setAttribute('dir', 'rtl');
    htmlTag.setAttribute('lang', 'ar');
  } else {
    htmlTag.setAttribute('dir', 'ltr');
    htmlTag.setAttribute('lang', 'en');
  }
}


  getCurrentLanguageName(): string {
    return this.currentLang === 'en' ? 'English' : 'العربية';
  }

  getCurrentLanguageFlag(): string {
    return this.currentLang === 'en' ? '🇬🇧' : '🇸🇦';
  }

}
