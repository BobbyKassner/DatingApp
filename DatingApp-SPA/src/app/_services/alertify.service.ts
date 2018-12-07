import { Injectable } from '@angular/core';

import * as alertifyJS from 'node_modules/alertifyjs/build/alertify.min.js';



@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallback: () => any) {
    alertifyJS.confirm(message, function(e) {
      if (e) {
        okCallback();
      } else {}
    });
  }

  success(message: string) {
    alertifyJS.success(message);
  }

  error(message: string) {
    alertifyJS.error(message);
  }

  warning(message: string) {
    alertifyJS.warning(message);
  }

  message(message: string) {
    alertifyJS.message(message);
  }
}
