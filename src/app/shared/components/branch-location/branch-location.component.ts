import { Component, Input, OnInit } from '@angular/core';
import { ContactLocation } from '../../../core/models/contact-form';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branch-location',
    imports: [CommonModule],
  templateUrl: './branch-location.component.html',
  styleUrls: ['./branch-location.component.css']
})
export class BranchLocationComponent  {

  @Input() branchName: string = '';
  @Input() mapUrl: string = '';
  @Input() contacts: ContactLocation[] = [];
  @Input() reverse: boolean = false;

  safeMapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }

  ngOnChanges(): void {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }

}
