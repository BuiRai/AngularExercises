import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-third-slug',
  templateUrl: './third-slug.component.html',
  styleUrl: './third-slug.component.css'
})
export class ThirdSlugComponent implements OnInit, OnDestroy {
  protected slug: string = '';
  private routeParamsSubscription: Subscription  | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateSlugFromParams();

    this.routeParamsSubscription  = this.route.params.subscribe((params) => {
      this.slug = params['slug'];
    });
  }


  ngOnDestroy(): void {
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
  }

  private updateSlugFromParams() {
    this.slug = this.route.snapshot.params['slug'];
  }
}
