import { Component } from '@angular/core';
import { NotificationService } from './notification.service';
import { DialogData, ToastMessage } from '../core/models/model';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <button (click)="updateNotification({toastType:2,message:'',isActive:false,key:'test toast', class:['toast','success','slide-in','fade-out']},$event)">Notify</button>
    <button (click)="showPopup({header:'',message:'testing dialog'})">Notify</button>
    {{count}}
    <app-dialog></app-dialog>
    <app-toastmessage></app-toastmessage>
  `,
  styles: []
})
export class AppComponent {
  notificationEvent: any;
  count:number = 0;
  constructor(private notificationService: NotificationService) {
    this.notificationEvent = this.notificationService.notification$;
  }

  updateNotification(message: ToastMessage,event: any) {
    let msg = message;
    msg.message = `This is a test message ${this.count++}`;
    this.notificationService.notify(msg,event);
  }

  showPopup(message: DialogData) {
    this.notificationService.show(message);
  }
}
