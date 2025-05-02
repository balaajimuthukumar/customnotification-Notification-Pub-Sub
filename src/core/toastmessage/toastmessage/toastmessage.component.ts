import { Component } from '@angular/core';
import { NotificationService } from '../../../app/notification.service';
import { ToastMessage } from '../../../core/models/model';

@Component({
  selector: 'app-toastmessage',
  template: `
    <div class="toast-container">
      <div class="toast-message">
        <span *ngIf="messageData?.toastType == 1" [ngClass]="messageClass?messageClass:''">{{ messageData.message }}</span>
        <span *ngIf="messageData?.toastType == 2" [ngClass]="messageClass?messageClass:''">{{ messageData.message }}</span>
        <span *ngIf="messageData?.toastType == 3" [ngClass]="messageClass?messageClass:''">{{ messageData.message }}</span>
        <span *ngIf="messageData?.toastType == 4" [ngClass]="messageClass?messageClass:''">{{ messageData.message }}</span>
        <span *ngIf="messageData?.toastType == 5" [ngClass]="messageClass?messageClass:''">{{ messageData.message }}</span>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ToastmessageComponent {
  messageData!: ToastMessage;
  messageClass: string[] = [];

  constructor(
    private notificationService: NotificationService) {
    this.notificationService.notification$.subscribe((message:ToastMessage) => {
      this.messageData = message;
      this.messageClass = this.messageData.class || [''  ,'', '',''];
    });
   }

  ngOnInit(): void {
  }
}
