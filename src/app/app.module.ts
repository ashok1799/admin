import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RolesComponent } from './roles/roles.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InActiveUsersComponent } from './in-active-users/in-active-users.component';
import { ActiveUserCreationComponent } from './active-user-creation/active-user-creation.component';
import { ActiveUserParticularViewComponent } from './active-user-particular-view/active-user-particular-view.component';
import { ActiveUserParticularEditComponent } from './active-user-particular-edit/active-user-particular-edit.component';
import {Accordion, AccordionGroup} from './active-user-creation/accordion';
import { MetadataComponent } from './metadata/metadata.component';
import { MyDatePickerModule } from 'mydatepicker';
import { InactiveUserParticularViewComponent } from './inactive-user-particular-view/inactive-user-particular-view.component';
import { InactiveUserParticularEditComponent } from './inactive-user-particular-edit/inactive-user-particular-edit.component';
import { PriceCandidatesAllComponent } from './price-candidates-all/price-candidates-all.component';
import { CandidatePlanParticularEditComponent } from './candidate-plan-particular-edit/candidate-plan-particular-edit.component';
import { CandidateParticularPlanHistoryComponent } from './candidate-particular-plan-history/candidate-particular-plan-history.component';
import { CandidateParticularHistoryViewComponent } from './candidate-particular-history-view/candidate-particular-history-view.component';
import { CandidateParticularHistoryMakecopyComponent } from './candidate-particular-history-makecopy/candidate-particular-history-makecopy.component';
import { CandidateParticularHistoryUsersComponent } from './candidate-particular-history-users/candidate-particular-history-users.component';
import { CompanyPriceConfigurationComponent } from './company-price-configuration/company-price-configuration.component';
import { CompanyFreePlanEditComponent } from './company-price-configuration/company-free-plan-edit/company-free-plan-edit.component';
import { CompanyFreePlanHistoryComponent } from './company-price-configuration/company-free-plan-history/company-free-plan-history.component';
import { CompanyFreePlanAssociatedCompanyComponent } from './company-price-configuration/company-free-plan-associated-company/company-free-plan-associated-company.component';
import { CompanyCompaniesPlanEditComponent } from './company-price-configuration/company-companies-plan-edit/company-companies-plan-edit.component';
import { CompanyPrioritysourcingPlanEditComponent } from './company-price-configuration/company-prioritysourcing-plan-edit/company-prioritysourcing-plan-edit.component';
import { CompanyDailywagePlanEditComponent } from './company-price-configuration/company-dailywage-plan-edit/company-dailywage-plan-edit.component';
import { FreePlanViewComponent } from './company-price-configuration/company-free-plan-history/free-plan-view/free-plan-view.component';
import { FreePlanMakecopyComponent } from './company-price-configuration/company-free-plan-history/free-plan-makecopy/free-plan-makecopy.component';
import { FreePlanAssociatecompanyComponent } from './company-price-configuration/company-free-plan-history/free-plan-associatecompany/free-plan-associatecompany.component';
import { CompanyCmpPlanHistoryComponent } from './company-price-configuration/company-cmp-plan-history/company-cmp-plan-history.component';
import { CmpPlanViewComponent } from './company-price-configuration/company-cmp-plan-history/cmp-plan-view/cmp-plan-view.component';
import { CmpPlanAssociatecompanyComponent } from './company-price-configuration/company-cmp-plan-history/cmp-plan-associatecompany/cmp-plan-associatecompany.component';
import { CmpPlanMakecopyComponent } from './company-price-configuration/company-cmp-plan-history/cmp-plan-makecopy/cmp-plan-makecopy.component';
import { PriorityPlanHistoryComponent } from './company-price-configuration/priority-plan-history/priority-plan-history.component';
import { PriorityPlanViewComponent } from './company-price-configuration/priority-plan-history/priority-plan-view/priority-plan-view.component';
import { PriorityPlanMakecopyComponent } from './company-price-configuration/priority-plan-history/priority-plan-makecopy/priority-plan-makecopy.component';
import { PriorityPlanAssociatecompanyComponent } from './company-price-configuration/priority-plan-history/priority-plan-associatecompany/priority-plan-associatecompany.component';
import { DailywagePlanHistoryComponent } from './company-price-configuration/dailywage-plan-history/dailywage-plan-history.component';
import { DailywagePlanViewComponent } from './company-price-configuration/dailywage-plan-history/dailywage-plan-view/dailywage-plan-view.component';
import { DailywagePlanMakecopyComponent } from './company-price-configuration/dailywage-plan-history/dailywage-plan-makecopy/dailywage-plan-makecopy.component';
import { DailywagePlanAssociatecompanyComponent } from './company-price-configuration/dailywage-plan-history/dailywage-plan-associatecompany/dailywage-plan-associatecompany.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { TaxManagementComponent } from './tax-management/tax-management.component';
import { TaxManagementHistoryComponent } from './tax-management-history/tax-management-history.component';
import { ActivitylogComponent } from './activitylog/activitylog.component';
import { ActivitylogParticularuserComponent } from './activitylog-particularuser/activitylog-particularuser.component';
import { TaxManagementHistoryCompanyComponent } from './tax-management-history-company/tax-management-history-company.component';
import { TaxCandidateAssociateViewComponent } from './tax-candidate-associate-view/tax-candidate-associate-view.component';
import { TaxCompanyAssociateViewComponent } from './tax-company-associate-view/tax-company-associate-view.component';
 

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    RolesComponent,
    ActiveUsersComponent,
    InActiveUsersComponent,
    ActiveUserCreationComponent,
    ActiveUserParticularViewComponent,
    ActiveUserParticularEditComponent,
    Accordion,
    AccordionGroup,
    MetadataComponent,
    InactiveUserParticularViewComponent,
    InactiveUserParticularEditComponent,
    PriceCandidatesAllComponent,
    CandidatePlanParticularEditComponent,
    CandidateParticularPlanHistoryComponent,
    CandidateParticularHistoryViewComponent,
    CandidateParticularHistoryMakecopyComponent,
    CandidateParticularHistoryUsersComponent,
    CompanyPriceConfigurationComponent,
    CompanyFreePlanEditComponent,
    CompanyFreePlanHistoryComponent,
    CompanyFreePlanAssociatedCompanyComponent,
    CompanyCompaniesPlanEditComponent,
    CompanyPrioritysourcingPlanEditComponent,
    CompanyDailywagePlanEditComponent,
    FreePlanViewComponent,
    FreePlanMakecopyComponent,
    FreePlanAssociatecompanyComponent,
    CompanyCmpPlanHistoryComponent,
    CmpPlanViewComponent,
    CmpPlanAssociatecompanyComponent,
    CmpPlanMakecopyComponent,
    PriorityPlanHistoryComponent,
    PriorityPlanViewComponent,
    PriorityPlanMakecopyComponent,
    PriorityPlanAssociatecompanyComponent,
    DailywagePlanHistoryComponent,
    DailywagePlanViewComponent,
    DailywagePlanMakecopyComponent,
    DailywagePlanAssociatecompanyComponent,
    TaxManagementComponent,
    TaxManagementHistoryComponent,
    ActivitylogComponent,
    ActivitylogParticularuserComponent,
    TaxManagementHistoryCompanyComponent,
    TaxCandidateAssociateViewComponent,
    TaxCompanyAssociateViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MyDatePickerModule,
    AngularMultiSelectModule
  ],
  providers: [Accordion, AccordionGroup],
  bootstrap: [AppComponent]
})
export class AppModule { }
