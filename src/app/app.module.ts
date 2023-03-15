//MODULES//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarModule } from 'primeng/progressbar';
import { TimelineModule } from 'primeng/timeline';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

//COMPONENTS//
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';

//SERVICES//
import { ContactService } from './shared/services/contact.service';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ScrollTopModule,
    ScrollPanelModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    TimelineModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
