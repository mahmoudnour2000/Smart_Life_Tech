import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
    imports: [CommonModule, ButtonComponent, TranslateModule],

  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
@Input() backgroundImage: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  /** Longer paragraph/description shown below the subtitle */
  @Input() description: string = '';
  @Input() buttonText: string = 'Learn More';
  @Input() buttonRoute: string = '/';
  @Input() showButton: boolean = false;

  constructor() { }

  ngOnInit() {
    // If author passed a single subtitle containing a newline, auto-split
    // into subtitle (first line) and description (remaining lines) for
    // backward compatibility and easier content editing.
    if (!this.description && this.subtitle) {
      const parts = this.subtitle.split(/\r?\n/).map(p => p.trim()).filter(Boolean);
      if (parts.length > 1) {
        this.subtitle = parts.shift() || '';
        this.description = parts.join('\n');
      }
    }
  }

}
