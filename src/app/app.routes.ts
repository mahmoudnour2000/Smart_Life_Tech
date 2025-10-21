import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SmartHomesPageComponent } from './pages/smart-homes-page/smart-homes-page.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
     {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', component: HomePageComponent },
        { path: 'smart-homes', component: SmartHomesPageComponent },
        { path: 'solutions', component: SolutionsComponent },
        { path: 'products', component: ProductsComponent },



      ]
    }
];
