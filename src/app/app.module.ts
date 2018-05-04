import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { FormsModule }from '@angular/forms';

import { RouterModule,Routes }from '@angular/router';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
path:"features",
component:FeaturesComponent
  },
  {
    path:"pricing",
    component:PricingComponent
      },
      {
        path:"posts",
        component:PostsComponent
          },

          {

            path:"posts/:id",
            component:PostComponent
          }
]

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    PricingComponent,
    SidebarComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes,{useHash:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
