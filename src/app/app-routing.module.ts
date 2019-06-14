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
import { NewRoleComponent } from './admin/access-control/new-role/new-role.component';
import { CalculatorsComponent } from './trading/visitors/calculators/calculators.component';
import { PIPCalculatorComponent } from './trading/visitors/calculators/pip-calculator/pip-calculator.component';
import { MarginCalculatorComponent } from './trading/visitors/calculators/margin-calculator/margin-calculator.component';
import { ProfitCalculatorComponent } from './trading/visitors/calculators/profit-calculator/profit-calculator.component';
import { ChartComponent } from './trading/visitors/chart/chart.component';
import { TechnicalAnalysisComponent } from './trading/visitors/technical-analysis/technical-analysis.component';
import { EconomicalCalenderComponent } from './trading/visitors/economical-calender/economical-calender.component';
import { TopPerformersComponent } from './trading/visitors/top-performers/top-performers.component';
import { MovingAveragesComponent } from './trading/visitors/economical-calender/moving-averages/moving-averages.component';
import { VisitorblogsComponent } from './trading/visitors/visitorblogs/visitorblogs.component';
import { UserMngtViewComponent } from './admin/user-mngt/user-mngt-view/user-mngt-view.component';
import { PlanningComponent } from './trading/singup/planning/planning.component';
import { BackgroundFontComponent } from './admin/cms/background-font/background-font.component';
import { PagesComponent } from './admin/cms/pages/pages.component';
import { SignedupDashboardComponent } from './trading/singup/signedup-dashboard/signedup-dashboard.component';
import { EditBlogComponent } from './admin/media/blog/edit-blog/edit-blog.component';
import { EditNewsComponent } from './admin/media/news/edit-news/edit-news.component';
import { EditPageComponent } from './admin/cms/pages/edit-page/edit-page.component';
import { LoginComponent } from './trading/common/login/login.component';
import { SignupComponent } from './trading/common/signup/signup.component';
// import { PerformanceComponent } from './trading/singup/performance/performance.component';
import { TradeEntryComponent } from './trading/singup/trade-entry/trade-entry.component';
import { PersonalPageComponent } from './trading/singup/personal-page/personal-page.component';
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
import { TechAnalysisComponent } from './trading/visitors/technical_analysis/tech-analysis/tech-analysis.component';
import { CandelstickPerfComponent } from './trading/singup/performance/candelstick-perf/candelstick-perf.component';
import { ChartStudiesComponent } from './trading/singup/performance/chart-studies/chart-studies.component';
import { EcoCalanderComponent } from './trading/singup/performance/eco-calander/eco-calander.component';
import { IndicatorsPerfComponent } from './trading/singup/performance/indicators-perf/indicators-perf.component';
import { NewsPerfComponent } from './trading/singup/performance/news-perf/news-perf.component';
import { PsychologyPerfComponent } from './trading/singup/performance/psychology-perf/psychology-perf.component';
import { SignalProviderPerfComponent } from './trading/singup/performance/signal-provider-perf/signal-provider-perf.component';
import { SignalSourceTypPerfComponent } from './trading/singup/performance/signal-source-typ-perf/signal-source-typ-perf.component';

const routes: Routes = [
  {path: '',component:CalculatorsComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'user-mngt',component:UserMngtComponent},
  {path: 'acoounting',component:AccountingComponent},
  {path: 'access-control',component:AccessControlComponent},
  {path: 'features-control',component:FeaturesControlComponent},
  {path: 'advt-mngt',component:AdvtMngtComponent},
  {path: 'blog',component:BlogComponent},
  {path: 'news',component:NewsComponent},
  {path: 'cms',component:CmsComponent},
  {path: 'new-role',component:NewRoleComponent},
  {path: 'pip-calculator',component:PIPCalculatorComponent},
  {path: 'margin-calculator',component:MarginCalculatorComponent},
  {path: 'profit-calculator',component:ProfitCalculatorComponent},
  {path: 'chart',component:ChartComponent},
  {path: 'technical-analysis',component:TechnicalAnalysisComponent},
  {path: 'economical-calender',component:EconomicalCalenderComponent},
  {path: 'top-performers',component:TopPerformersComponent},
  {path: 'moving-averg',component:MovingAveragesComponent},
  {path: 'visitorblogs',component:VisitorblogsComponent},
  {path: 'user-view',component:UserMngtViewComponent},
  {path: 'planning',component:PlanningComponent},
  {path: 'background-font',component:BackgroundFontComponent},
  {path: 'cms-pages',component:PagesComponent},
  {path: 'signedup-dashboard',component:SignedupDashboardComponent},
  {path: 'edit-blog',component:EditBlogComponent},
  {path: 'edit-news',component:EditNewsComponent},
  {path: 'edit-page',component:EditPageComponent},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  // {path: 'performance',component:PerformanceComponent},
  {path: 'trade-entry',component:TradeEntryComponent},
  {path: 'personal-page',component:PersonalPageComponent},
  {path: 'visitor-news',component:VisitorsNewsComponent},
  {path: 'socials/blog',component:SigneduserBlogComponent},
  {path: 'socials/chat',component:ChatComponent},
  {path: 'socials/list',component:ListComponent},
  {path: 'socials/news',component:SigneduserNewsComponent},
  {path: 'socials/trade-position',component:TradePositionComponent},
  {path: 'socials/general-feed',component:GeneralFeedComponent},
  {path: 'socials/blog/blog-details',component:BlogDetailsPageComponent},
  {path: 'reports/status-report',component:StatusReportComponent},
  {path: 'reports/trading-log-report',component:TradingLogReportComponent},
  {path: 'chart-study',component:ChartStudyComponent},
  {path: 'chart-study-log',component:ChartStudyLogComponent},
  {path: 'chart-study-table',component:ChartStudyTableComponent},
  {path: 'revised-chart-study',component:RevisedChartStudyComponent},
  {path: 'filters',component:FiltersComponent},
  {path: 'performance',component:PerformanceComponent},
  {path: 'psychology',component:PsychologyComponent},
  {path: 'quarterwise-performance',component:QuaterwisePerformanceComponent},
  {path: 'socials-performance',component:PerformanceSocialsComponent},
  {path: 'source-type-performance',component:SourceTypePerformanceComponent},
  {path: 'user-profile',component:UserProfileComponent},
  {path: 'how-it-work',component:HowItWorkComponent},
  {path: 'features',component:FeaturesComponent},
  {path: 'terms-for-use',component:TermsForUseComponent},
  {path: 'privacy-policy',component:PrivacyPolicyComponent},
  {path: 'sidemap',component:SidemapComponent},
  {path: 'tech-analysis',component:TechAnalysisComponent},
  {path: 'candelstick-perf',component:CandelstickPerfComponent},
  {path: 'chart-studies-perf',component:ChartStudiesComponent},
  {path: 'eco-cal-perf',component:EcoCalanderComponent},
  {path: 'indicators-perf',component:IndicatorsPerfComponent},
  {path: 'newsperf',component:NewsPerfComponent},
  {path: 'pstchology-perf',component:PsychologyPerfComponent},
  {path: 'signal-provider-perf',component:SignalProviderPerfComponent},
  {path: 'source-type-perf',component:SignalSourceTypPerfComponent},
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
