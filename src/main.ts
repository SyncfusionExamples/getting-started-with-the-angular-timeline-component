import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {registerLicense} from '@syncfusion/ej2-base';
registerLicense("Add your license key");

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
