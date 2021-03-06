import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
   { path: "", component: HomeComponent },
   { path: "produtos", component: ProductCrudComponent },
   { path: "produtos/criar", component: ProductCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
