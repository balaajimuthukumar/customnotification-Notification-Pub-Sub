import { Component } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';
import { DialogData } from 'src/core/models/model';

@Component({
  selector: 'app-dialog',
  template: `
    <p>
      {{ message }}
    </p>
  `,
  styles: [
  ]
})
export class DialogComponent {
  data!: DialogData;
  header: string = '';
  message: string = '';
  constructor(private notificationService: NotificationService) {
    this.notificationService.dialog$.subscribe((messageData:DialogData) => {
        this.data = messageData;
        this.header = this.data.header;
        this.message = this.data.message;
        // console.log('DIALOG message received:', this.message);
    });
  }

  ngOnInit(): void {
    console.log('DialogComponent initialized');
  }

}
