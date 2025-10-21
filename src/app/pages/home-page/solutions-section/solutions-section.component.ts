import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { SolutionCard } from '../../../core/models/home-sections';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions-section',
  templateUrl: './solutions-section.component.html',
  styleUrls: ['./solutions-section.component.css'],
  imports: [ButtonComponent,CommonModule]
})
export class SolutionsSectionComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() title: string = 'Smart Building Solutions';
  @Input() subtitle: string = 'Elevate Your Commercial & Public Spaces';
  @Input() ariaLabel: string = 'Smart building solutions section';
  @Input() buttonText: string = 'Find Out More';
  @Input() buttonRoute: string = '/solutions';

  @Input() cards: SolutionCard[] = [
    {
      id: 'building-automation',
      icon: 'assets/images/building_icon.png',
      title: 'Building Automation System (BAS)',
      description: 'BAS monitors and controls key systems—HVAC, lighting, access, and security—while providing data for smarter decisions, better energy use, and improved performance.'
    },
    {
      id: 'energy-management',
      icon: 'assets/images/energy_icon.png',
      title: 'Energy Management Systems (EMS)',
      description: 'EMS tracks and optimizes energy consumption by automatically adjusting lighting, HVAC, and equipment to reduce costs and support sustainability.'
    },
    {
      id: 'iot-devices',
      icon: 'assets/images/iot_icon.png',
      title: 'IOT Devices in Buildings',
      description: 'IOT sensors—like smart locks, lights, and thermostats—collect real-time data, enabling precise monitoring, automation, and enhanced building insights.'
    }
  ];

}
