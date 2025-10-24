import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { SolutionCard } from '../../../core/models/home-sections';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-solutions-section',
  standalone: true,
  templateUrl: './solutions-section.component.html',
  styleUrls: ['./solutions-section.component.css'],
  imports: [ButtonComponent,CommonModule, TranslateModule]
})
export class SolutionsSectionComponent implements OnInit {
  ngOnInit(): void {
  }
 description?: string;
   ariaLabel: string = 'Smart building solutions section';

 cards: SolutionCard[] = [
    {
      id: 'building-automation',
      icon: 'assets/images/building_icon.png',
      title: 'Solutions.cards.building-automation.title',
      description: 'Solutions.cards.building-automation.description'
    },
    {
      id: 'energy-management',
      icon: 'assets/images/energy_icon.png',
      title: 'Solutions.cards.energy-management.title',
      description: 'Solutions.cards.energy-management.description'
    },
    {
      id: 'iot-devices',
      icon: 'assets/images/iot_icon.png',
      title: 'Solutions.cards.iot-devices.title',
      description: 'Solutions.cards.iot-devices.description'
    }
  ];

}
