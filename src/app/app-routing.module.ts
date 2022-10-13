import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BobComponent } from './about/bob/bob.component';
import { SusanComponent } from './about/susan/susan.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { ThingamathingsComponent } from './products/thingamathings/thingamathings.component';
import { UnderwaterbasketweavingComponent } from './products/underwaterbasketweaving/underwaterbasketweaving.component';
import { WhatsitfucksComponent } from './products/whatsitfucks/whatsitfucks.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: "about", component: AboutComponent, children: [
    {path: 'bob', component: BobComponent},
    {path: 'susan', component: SusanComponent}
  ]
  },
  {path: "products", component: ProductsComponent, children: [
    {path: 'thingamathings', component: ThingamathingsComponent},
    {path: 'underwaterbasketweaving', component: UnderwaterbasketweavingComponent},
    {path: 'whatsitfucks', component: WhatsitfucksComponent}]},
  {path: "contact", component: ContactComponent},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
