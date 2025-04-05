import { Routes } from '@angular/router';
import { MainContentLandingpageComponent } from './main-content-landingpage/main-content-landingpage.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {
        path: '',
        component: MainContentLandingpageComponent
    },
    {
        path: 'impressum',
        component: PrivacyPolicyComponent 
    }
]; 
