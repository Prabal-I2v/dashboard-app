import { Component } from '@angular/core';
import { NotificationService } from '../../core/services/notification.service';
import { IUser } from '../../core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  unreadCount = 0;
  userMenuOptions: any[] = [{ label: 'My profile', icon: "assets/icons/user-circle.svg" }, { label: 'Account Settings', icon: "assets/icons/setting.svg" }, { label: 'Help & Support', icon: "assets/icons/help.svg" }]
  selectedOption: string = "My profile";
  User : IUser =  { id: '1', name: 'Karan Kapoor', position: 'Medical Assistant', email: 'karankapoor@email.com', avatar: 'assets/images/avatars/user1.jpg', totalExpenses: 99122 }

  constructor(private notificationService: NotificationService) {
    this.notificationService.getUnreadCount().subscribe(count => {
      this.unreadCount = count;
    });
  }


  onOptionSelect(selectedValue: string) {
    this.selectedOption = selectedValue;
  }
}