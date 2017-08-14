/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { MetadataComponent } from './metadata/metadata.component';
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
import { CompanyCmpPlanHistoryComponent } from './company-price-configuration/company-cmp-plan-history/company-cmp-plan-history.component';
import { CmpPlanViewComponent } from './company-price-configuration/company-cmp-plan-history/cmp-plan-view/cmp-plan-view.component';
import { CmpPlanAssociatecompanyComponent } from './company-price-configuration/company-cmp-plan-history/cmp-plan-associatecompany/cmp-plan-associatecompany.component';
import { CmpPlanMakecopyComponent } from './company-price-configuration/company-cmp-plan-history/cmp-plan-makecopy/cmp-plan-makecopy.component';
import { FreePlanViewComponent } from './company-price-configuration/company-free-plan-history/free-plan-view/free-plan-view.component';
import { FreePlanMakecopyComponent } from './company-price-configuration/company-free-plan-history/free-plan-makecopy/free-plan-makecopy.component';
import { FreePlanAssociatecompanyComponent } from './company-price-configuration/company-free-plan-history/free-plan-associatecompany/free-plan-associatecompany.component';
import { PriorityPlanHistoryComponent } from './company-price-configuration/priority-plan-history/priority-plan-history.component';
import { PriorityPlanViewComponent } from './company-price-configuration/priority-plan-history/priority-plan-view/priority-plan-view.component';
import { PriorityPlanMakecopyComponent } from './company-price-configuration/priority-plan-history/priority-plan-makecopy/priority-plan-makecopy.component';
import { PriorityPlanAssociatecompanyComponent } from './company-price-configuration/priority-plan-history/priority-plan-associatecompany/priority-plan-associatecompany.component';
import { DailywagePlanHistoryComponent } from './company-price-configuration/dailywage-plan-history/dailywage-plan-history.component';
import { DailywagePlanViewComponent } from './company-price-configuration/dailywage-plan-history/dailywage-plan-view/dailywage-plan-view.component';
import { DailywagePlanMakecopyComponent } from './company-price-configuration/dailywage-plan-history/dailywage-plan-makecopy/dailywage-plan-makecopy.component';
import { DailywagePlanAssociatecompanyComponent } from './company-price-configuration/dailywage-plan-history/dailywage-plan-associatecompany/dailywage-plan-associatecompany.component';
import { TaxManagementComponent } from './tax-management/tax-management.component';
import { TaxManagementHistoryComponent } from './tax-management-history/tax-management-history.component';
import { ActivitylogComponent } from './activitylog/activitylog.component';
import { ActivitylogParticularuserComponent } from './activitylog-particularuser/activitylog-particularuser.component';
import { TaxManagementHistoryCompanyComponent } from './tax-management-history-company/tax-management-history-company.component';
import { TaxCandidateAssociateViewComponent } from './tax-candidate-associate-view/tax-candidate-associate-view.component';
import { TaxCompanyAssociateViewComponent } from './tax-company-associate-view/tax-company-associate-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'Dashboard',  component: DashboardComponent, data:{title:'Dashboard'} },
  { path: 'Roles',  component: RolesComponent, data:{title:'Roles'} },
  { path: 'ActiveUsers',  component: ActiveUsersComponent, data:{title:'ActiveUsers'} },
  { path: 'InActiveUsers',  component: InActiveUsersComponent, data:{title:'InActiveUsers'} },
  { path: 'ActiveUserCreation',  component: ActiveUserCreationComponent, data:{title:'ActiveUserCreation'} }, 
  { path: 'ActiveUserParticularView',  component: ActiveUserParticularViewComponent, data:{title:'ActiveUserParticularView'} }, 
  { path: 'ActiveUserParticularEdit',  component: ActiveUserParticularEditComponent, data:{title:'ActiveUserParticularEdit'} }, 
  { path: 'InactiveUserParticularView',  component: InactiveUserParticularViewComponent, data:{title:'InactiveUserParticularView'} }, 
  { path: 'InactiveUserParticularEdit',  component: InactiveUserParticularEditComponent, data:{title:'InactiveUserParticularEdit'} },
  { path: 'Metadata',  component: MetadataComponent, data:{title:'Metadata'} },
  { path: 'PriceCandidatesAll',  component: PriceCandidatesAllComponent, data:{title:'PriceCandidatesAll'} },
  { path: 'CandidatePlanParticularEdit',  component: CandidatePlanParticularEditComponent, data:{title:'CandidatePlanParticularEdit'} },
  { path: 'CandidateParticularPlanHistory',  component: CandidateParticularPlanHistoryComponent, data:{title:'CandidateParticularPlanHistory'} },
  { path: 'CandidateParticularHistoryView',  component: CandidateParticularHistoryViewComponent, data:{title:'CandidateParticularHistoryView'} },
  { path: 'CandidateParticularHistoryMakecopy',  component: CandidateParticularHistoryMakecopyComponent, data:{title:'CandidateParticularHistoryMakecopy'} },
  { path: 'CandidateParticularHistoryUsers',  component: CandidateParticularHistoryUsersComponent, data:{title:'CandidateParticularHistoryUsers'} },
  { path: 'CompanyPriceConfiguration',  component: CompanyPriceConfigurationComponent, data:{title:'CompanyPriceConfiguration'} },
  { path: 'CompanyFreePlanEdit',  component: CompanyFreePlanEditComponent, data:{title:'CompanyFreePlanEdit'} },
  { path: 'CompanyFreePlanHistory',  component: CompanyFreePlanHistoryComponent, data:{title:'CompanyFreePlanHistory'} },
  { path: 'CompanyFreePlanAssociatedCompany',  component: CompanyFreePlanAssociatedCompanyComponent, data:{title:'CompanyFreePlanAssociatedCompany'} },
  { path: 'CompanyCompaniesPlanEdit',  component: CompanyCompaniesPlanEditComponent, data:{title:'CompanyCompaniesPlanEdit'} },
  { path: 'CompanyPrioritysourcingPlanEdit',  component: CompanyPrioritysourcingPlanEditComponent, data:{title:'CompanyPrioritysourcingPlanEdit'} },
  { path: 'CompanyDailywagePlanEdit',  component: CompanyDailywagePlanEditComponent, data:{title:'CompanyDailywagePlanEdit'} },
  { path: 'CompanyCmpPlanHistory',  component: CompanyCmpPlanHistoryComponent, data:{title:'CompanyCmpPlanHistory'} },
  { path: 'CmpPlanView',  component: CmpPlanViewComponent, data:{title:'CmpPlanView'} },
  { path: 'CmpPlanMakecopy',  component: CmpPlanMakecopyComponent, data:{title:'CmpPlanMakecopy'} },
  { path: 'CmpPlanAssociatecompany',  component: CmpPlanAssociatecompanyComponent, data:{title:'CmpPlanAssociatecompany'} },
  { path: 'FreePlanView',  component: FreePlanViewComponent, data:{title:'FreePlanView'} },
  { path: 'FreePlanMakecopy',  component: FreePlanMakecopyComponent, data:{title:'FreePlanMakecopy'} },
  { path: 'FreePlanAssociatecompany',  component: FreePlanAssociatecompanyComponent, data:{title:'FreePlanAssociatecompany'} },

  { path: 'PriorityPlanHistory',  component: PriorityPlanHistoryComponent, data:{title:'PriorityPlanHistory'} },
  { path: 'PriorityPlanView',  component: PriorityPlanViewComponent, data:{title:'PriorityPlanView'} },
  { path: 'PriorityPlanMakecopy',  component: PriorityPlanMakecopyComponent, data:{title:'PriorityPlanMakecopy'} },
  { path: 'PriorityPlanAssociatecompany',  component: PriorityPlanAssociatecompanyComponent, data:{title:'PriorityPlanAssociatecompany'} },

  { path: 'DailywagePlanHistory',  component: DailywagePlanHistoryComponent, data:{title:'DailywagePlanHistory'} },
  { path: 'DailywagePlanView',  component: DailywagePlanViewComponent, data:{title:'DailywagePlanView'} },
  { path: 'DailywagePlanMakecopy',  component: DailywagePlanMakecopyComponent, data:{title:'DailywagePlanMakecopy'} },
  { path: 'DailywagePlanAssociatecompany',  component: DailywagePlanAssociatecompanyComponent, data:{title:'DailywagePlanAssociatecompany'} },
  { path: 'TaxManagement',  component: TaxManagementComponent, data:{title:'TaxManagement'} },
  { path: 'TaxManagementHistory',  component: TaxManagementHistoryComponent, data:{title:'TaxManagementHistoryCandidate'} },
  { path: 'TaxManagementHistoryCompany',  component: TaxManagementHistoryCompanyComponent, data:{title:'TaxManagementHistoryCompany'} },
  { path: 'TaxCandidateAssociateView',  component: TaxCandidateAssociateViewComponent, data:{title:'TaxCandidateAssociateView'} },
  { path: 'TaxCompanyAssociateView',  component: TaxCompanyAssociateViewComponent, data:{title:'TaxCompanyAssociateView'} },


  { path: 'Activitylog',  component: ActivitylogComponent, data:{title:'Activitylog'} },
  { path: 'ActivitylogParticularuser',  component: ActivitylogParticularuserComponent, data:{title:'ActivitylogParticularuser'} }
  
 
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}