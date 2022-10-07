import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

await bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule, RouterModule.forRoot(ROUTES))],
});
