import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NotificationsComponent } from '../notifications/notifications.component';
import { socialNetworks } from '../data';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NotificationsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user: any;
  showNotifications = false;
  isClosed = false; 

  toggleView() {
    this.showNotifications = !this.showNotifications;
  }

  networkColor: { [key: string]: string } = {
    youtube: 'red',
    tiktok: 'blue',
    instagram: 'pink',
    facebook: 'skyblue',
    whatsapp: 'green'
  };

  changeSubscriptionType(newType: string) {
    this.user.subscriptionType = newType;
  }

  getUnsubscribedSocialNetworks() {
    return socialNetworks.filter(sn => !this.user.subscriptions.includes(sn.id));
  }

  getPlatformById(id: number): string {
    const network = socialNetworks.find(network => network.id === id);
    return network ? network.platform : '';
  }

  addSubscription(id: number) {
    this.user.subscriptions.push(id);
  }

  removeSubscription(id: number) {
    this.user.subscriptions = this.user.subscriptions.filter((subId: number) => subId !== id);
  }

  closeAccount() {
    this.isClosed = true; 
  }
}
