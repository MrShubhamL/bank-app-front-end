import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppModule } from './app/app.module';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  export const appConfig: ApplicationConfig = {
    providers: [provideHttpClient(withFetch()), provideClientHydration()]
  }