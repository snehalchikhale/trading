import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/common/header/header.component';
import { FooterComponent } from './admin/common/footer/footer.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserMngtComponent } from './admin/user-mngt/user-mngt.component';
import { AccountingComponent } from './admin/accounting/accounting.component';
import { AccessControlComponent } from './admin/access-control/access-control.component';
import { FeaturesControlComponent } from './admin/features-control/features-control.component';
import { AdvtMngtComponent } from './admin/advt-mngt/advt-mngt.component';
import { BlogComponent } from './admin/media/blog/blog.component';
import { NewsComponent } from './admin/media/news/news.component';
import { CmsComponent } from './admin/cms/cms.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    UserMngtComponent,
    AccountingComponent,
    AccessControlComponent,
    FeaturesControlComponent,
    AdvtMngtComponent,
    BlogComponent,
    NewsComponent,
    CmsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
