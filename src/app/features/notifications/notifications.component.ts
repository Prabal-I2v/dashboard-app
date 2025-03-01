import { Component, OnInit } from '@angular/core';
import { INotification } from '../../core/models/notification.model';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: INotification[] = [];
  activeTab: 'notifications' | 'announcements' = 'notifications';
  
  constructor(private notificationService: NotificationService) {}
  
  ngOnInit(): void {
    this.loadNotifications();
  }
  
  loadNotifications(): void {
    this.notificationService.getNotifications().subscribe(data => {
      this.notifications = data;
    });
  }
  
  setActiveTab(tab: 'notifications' | 'announcements'): void {
    this.activeTab = tab;
  }
}