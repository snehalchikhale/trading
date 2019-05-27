import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserMngtComponent } from './admin/user-mngt/user-mngt.component';
import { AccountingComponent } from './admin/accounting/accounting.component';
import { AccessControlComponent } from './admin/access-control/access-control.component';
import { FeaturesControlComponent } from './admin/features-control/features-control.component';
import { AdvtMngtComponent } from './admin/advt-mngt/advt-mngt.component';
import { BlogComponent } from './admin/media/blog/blog.component';
import { NewsComponent } from './admin/media/news/news.component';
import { CmsComponent } from './admin/cms/cms.component';

const routes: Routes = [
  {path: '',component:DashboardComponent},
  {path: 'user-mngt',component:UserMngtComponent},
  {path: 'acoounting',component:AccountingComponent},
  {path: 'access-control',component:AccessControlComponent},
  {path: 'features-control',component:FeaturesControlComponent},
  {path: 'advt-mngt',component:AdvtMngtComponent},
  {path: 'blog',component:BlogComponent},
  {path: 'news',component:NewsComponent},
  {path: 'cms',component:CmsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
