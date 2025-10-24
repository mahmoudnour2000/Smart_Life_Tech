import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SmartHomesPageComponent } from './pages/smart-homes-page/smart-homes-page.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { BePartnerComponent } from './pages/be-partner/be-partner.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

export const routes: Routes = [
     {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', component: HomePageComponent },
        { path: 'smart-homes', component: SmartHomesPageComponent },
        { path: 'solutions', component: SolutionsComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'blog', component: BlogPageComponent },
        { path: 'contact', component: ContactUsPageComponent },
        { path: 'partner', component: BePartnerComponent },
        { path: 'about', component: AboutUsPageComponent },




      ]
    }
];
