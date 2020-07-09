import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { CommonModule } from '../app/common/common.module';
import { AppComponent } from './app.component';
import { BusinessListComponent } from './components/businesses/businesses.component';
import { BusinessService } from './services/business.service';

@NgModule({
  declarations: [
    AppComponent,
    BusinessListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    TableModule,
    SidebarModule,
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})

export class AppModule { }
