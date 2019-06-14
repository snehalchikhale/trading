import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/common/header/header.component';
import { FooterComponent } from './admin/common/footer/footer.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MediaComponent } from './admin/media/media.component';

import { UserMngtComponent } from './admin/user-mngt/user-mngt.component';
import { AccountingComponent, AddOrderPopup } from './admin/accounting/accounting.component';
import { AccessControlComponent } from './admin/access-control/access-control.component';
import { FeaturesControlComponent } from './admin/features-control/features-control.component';
import { AdvtMngtComponent, AddAdvPopup, UploadAdPopup } from './admin/advt-mngt/advt-mngt.component';
import { BlogComponent, AddNewBlogPopup} from './admin/media/blog/blog.component';
import { NewsComponent, AddNewNewsPopup } from './admin/media/news/news.component';
import { CmsComponent } from './admin/cms/cms.component';
import {MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from './admin/common/sidebar/sidebar.component';
import { SharedService } from './service/shared.service';
import {MainContentComponent } from './admin/common/main-content/main-content.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {NewRoleComponent } from './admin/access-control/new-role/new-role.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { CalculatorsComponent } from './trading/visitors/calculators/calculators.component';
import { HeaderComponentTrading } from './trading/common/header/header.component';
import { FooterComponentTrading } from './trading/common/footer/footer.component';
import { PIPCalculatorComponent } from './trading/visitors/calculators/pip-calculator/pip-calculator.component';
import { MarginCalculatorComponent } from './trading/visitors/calculators/margin-calculator/margin-calculator.component';
import { ProfitCalculatorComponent } from './trading/visitors/calculators/profit-calculator/profit-calculator.component';
import { ChartComponent } from './trading/visitors/chart/chart.component';
import { TechnicalAnalysisComponent } from './trading/visitors/technical-analysis/technical-analysis.component';
import { EconomicalCalenderComponent } from './trading/visitors/economical-calender/economical-calender.component';
import { TopPerformersComponent } from './trading/visitors/top-performers/top-performers.component';
import { MovingAveragesComponent } from './trading/visitors/economical-calender/moving-averages/moving-averages.component';
import { VisitorblogsComponent } from './trading/visitors/visitorblogs/visitorblogs.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserMngtViewComponent } from './admin/user-mngt/user-mngt-view/user-mngt-view.component';
import { PlanningComponent } from './trading/singup/planning/planning.component';
// import { PerformanceComponent } from './trading/singup/performance/performance.component';
import { TradeEntryComponent } from './trading/singup/trade-entry/trade-entry.component';
// import { ReportsComponent } from './trading/singup/reports/reports.component';
import { PersonalPageComponent } from './trading/singup/personal-page/personal-page.component';
import { BackgroundFontComponent } from './admin/cms/background-font/background-font.component';
import { PagesComponent, AddNewPagePopup } from './admin/cms/pages/pages.component';
import { SignedupDashboardComponent } from './trading/singup/signedup-dashboard/signedup-dashboard.component';
import { EditBlogComponent } from './admin/media/blog/edit-blog/edit-blog.component';
import { EditNewsComponent } from './admin/media/news/edit-news/edit-news.component';
import { EditPageComponent } from './admin/cms/pages/edit-page/edit-page.component';
import { LoginComponent } from './trading/common/login/login.component';
import { SignupComponent } from './trading/common/signup/signup.component';
import { SubmenubarComponent } from './trading/common/submenubar/submenubar.component';
import { TopadvComponent } from './trading/common/topadv/topadv.component';
import { VisitorsNewsComponent } from './trading/visitors/visitors-news/visitors-news.component';
import { SigneduserBlogComponent } from './trading/singup/socials/signeduser-blog/signeduser-blog.component';
import { ChatComponent } from './trading/singup/socials/chat/chat.component';
import { ListComponent } from './trading/singup/socials/list/list.component';
import { SigneduserNewsComponent } from './trading/singup/socials/signeduser-news/signeduser-news.component';
import { TradePositionComponent } from './trading/singup/socials/trade-position/trade-position.component';
import { GeneralFeedComponent } from './trading/singup/socials/general-feed/general-feed.component';
import { BlogDetailsPageComponent } from './trading/singup/socials/signeduser-blog/blog-details-page/blog-details-page.component';
import { StatusReportComponent } from './trading/singup/Reports/status-report/status-report.component';
import { TradingLogReportComponent } from './trading/singup/Reports/trading-log-report/trading-log-report.component';
import { ChartStudyComponent } from './trading/singup/chart-study/chart-study/chart-study.component';
import { ChartStudyLogComponent } from './trading/singup/chart-study/chart-study-log/chart-study-log.component';
import { ChartStudyTableComponent } from './trading/singup/chart-study/chart-study-table/chart-study-table.component';
import { RevisedChartStudyComponent } from './trading/singup/chart-study/revised-chart-study/revised-chart-study.component';
import { FiltersComponent } from './trading/singup/performance/filters/filters.component';
import { PerformanceComponent } from './trading/singup/performance/performance/performance.component';
import { PsychologyComponent } from './trading/singup/performance/psychology/psychology.component';
import { QuaterwisePerformanceComponent } from './trading/singup/performance/quaterwise-performance/quaterwise-performance.component';
import { PerformanceSocialsComponent } from './trading/singup/performance/performance-socials/performance-socials.component';
import { SourceTypePerformanceComponent } from './trading/singup/performance/source-type-performance/source-type-performance.component';
import { UserProfileComponent } from './trading/common/user-profile/user-profile.component';
import { HowItWorkComponent } from './trading/common/how-it-work/how-it-work.component';
import { FeaturesComponent } from './trading/common/features/features.component';
import { TermsForUseComponent } from './trading/common/terms-for-use/terms-for-use.component';
import { PrivacyPolicyComponent } from './trading/common/privacy-policy/privacy-policy.component';
import { SidemapComponent } from './trading/common/sidemap/sidemap.component';
import {MatDividerModule} from '@angular/material/divider';
import { TechAnalysisComponent } from './trading/visitors/technical_analysis/tech-analysis/tech-analysis.component';
import { CandelstickPerfComponent } from './trading/singup/performance/candelstick-perf/candelstick-perf.component';
import { ChartStudiesComponent } from './trading/singup/performance/chart-studies/chart-studies.component';
import { EcoCalanderComponent } from './trading/singup/performance/eco-calander/eco-calander.component';
import { IndicatorsPerfComponent } from './trading/singup/performance/indicators-perf/indicators-perf.component';
import { NewsPerfComponent } from './trading/singup/performance/news-perf/news-perf.component';
import { PsychologyPerfComponent } from './trading/singup/performance/psychology-perf/psychology-perf.component';
import { SignalProviderPerfComponent } from './trading/singup/performance/signal-provider-perf/signal-provider-perf.component';
import { SignalSourceTypPerfComponent } from './trading/singup/performance/signal-source-typ-perf/signal-source-typ-perf.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    MediaComponent,
    UserMngtComponent,
    AccountingComponent,
    AccessControlComponent,
    FeaturesControlComponent,
    AdvtMngtComponent,
    BlogComponent,
    NewsComponent,
    CmsComponent,
    SidebarComponent,
    MainContentComponent,
    NewRoleComponent,
    AddAdvPopup,
    UploadAdPopup,
    CalculatorsComponent,
    HeaderComponentTrading,
    FooterComponentTrading,
    PIPCalculatorComponent,
    MarginCalculatorComponent,
    ProfitCalculatorComponent,
    ChartComponent,
    TechnicalAnalysisComponent,
    EconomicalCalenderComponent,
    TopPerformersComponent,
    MovingAveragesComponent,
    VisitorblogsComponent,
    UserMngtViewComponent,
    PlanningComponent,
    // PerformanceComponent,
    TradeEntryComponent,
    PersonalPageComponent,
    BackgroundFontComponent,
    PagesComponent,
    AddOrderPopup,
    SignedupDashboardComponent,
    EditBlogComponent,
    AddNewBlogPopup,
    EditNewsComponent,
    AddNewNewsPopup,
    EditPageComponent,
    AddNewPagePopup,
    LoginComponent,
    SignupComponent,
    SubmenubarComponent,
    TopadvComponent,
    VisitorsNewsComponent,
    SigneduserBlogComponent,
    ChatComponent,
    ListComponent,
    SigneduserNewsComponent,
    TradePositionComponent,
    GeneralFeedComponent,
    BlogDetailsPageComponent,
    StatusReportComponent,
    TradingLogReportComponent,
    ChartStudyComponent,
    ChartStudyLogComponent,
    ChartStudyTableComponent,
    RevisedChartStudyComponent,
    FiltersComponent,
    PerformanceComponent,
    PsychologyComponent,
    QuaterwisePerformanceComponent,
    PerformanceSocialsComponent,
    SourceTypePerformanceComponent,
    UserProfileComponent,
    HowItWorkComponent,
    FeaturesComponent,
    TermsForUseComponent,
    PrivacyPolicyComponent,
    SidemapComponent,
    TechAnalysisComponent,
    CandelstickPerfComponent,
    ChartStudiesComponent,
    EcoCalanderComponent,
    IndicatorsPerfComponent,
    NewsPerfComponent,
    PsychologyPerfComponent,
    SignalProviderPerfComponent,
    SignalSourceTypPerfComponent,
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
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    PerfectScrollbarModule,
    MatTableModule,
    MatTooltipModule,
    MatDividerModule,
    MatRadioModule
  ],
  providers: [SharedService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
    ],
  entryComponents: [AddAdvPopup, UploadAdPopup, AddOrderPopup, AddNewBlogPopup, AddNewNewsPopup,AddNewPagePopup],
  bootstrap: [AppComponent],
})
export class AppModule { }
