import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [HeaderComponent, RouterModule, FooterComponent]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
