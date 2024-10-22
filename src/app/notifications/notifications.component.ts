import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  @Input() notifications: string[] = [];

  platformColors: { [key: string]: string } = {
    youtube: 'red',
    tiktok: 'blue',
    instagram: 'pink',
    facebook: 'skyblue',
    whatsapp: 'green'
  };

  getColor(notification: string): string {
    if (notification.includes('youtube')) return this.platformColors['youtube'];
    if (notification.includes('tiktok')) return this.platformColors['tiktok'];
    if (notification.includes('instagram')) return this.platformColors['instagram'];
    if (notification.includes('facebook')) return this.platformColors['facebook'];
    if (notification.includes('whatsapp')) return this.platformColors['whatsapp'];
    return 'white'; 
  }
}