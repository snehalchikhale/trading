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
import {MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from './admin/common/sidebar/sidebar.component';
import { SharedService } from './service/shared.service';
import { MainContentComponent } from './admin/common/main-content/main-content.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';

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
    CmsComponent,
    SidebarComponent,
    MainContentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatListModule
  ],
  providers: [SharedService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
