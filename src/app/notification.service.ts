import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogData, ToastMessage } from '../core/models/model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notification = new Subject<ToastMessage>();
  private messages: ToastMessage[] = [];
  public notification$ = this.notification.asObservable();
  private dialog = new Subject<DialogData>();
  public dialog$ = this.dialog.asObservable();
  private isProcessing: boolean = false;
  constructor() { }

  notify(message:ToastMessage, event?:any){
    if(event && event?.type == 'click')
      this.messages.push(message);

    if(!this.messages[0]?.message){
      return;
    }
    if(this.isProcessing){
      return;
    }
    
    this.notification.next(this.messages[0]);
    this.isProcessing = true;
    
    setTimeout(() => {
      this.messages.shift();
      this.isProcessing = false;

      if(this.messages.length > 0)
        this.notify(this.messages[0]);
      else
        this.notification.next({} as ToastMessage);
    }, 5000)
  }

  show(dialogData:DialogData){
    this.dialog.next(dialogData);
  }

}
