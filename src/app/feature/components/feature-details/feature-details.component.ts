import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app-state';
import * as FeatureActions from '../../actions/feature.actions';
import {selectData} from '../../selectors/feature.selectors';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-feature-details',
    templateUrl: './feature-details.component.html',
    styleUrls: ['./feature-details.component.scss']
})
export class FeatureDetailsComponent implements OnInit, OnDestroy {

    featureDetailsSubscription: Subscription;
    routeSubscription: Subscription;
    data;

    constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.routeSubscription = this.route.params
            .subscribe(params =>
                this.store.dispatch(FeatureActions.getData({id: params.id}))
            );
        this.featureDetailsSubscription = this.store.select(selectData)
            .subscribe(data => {
                    this.data = data;

                }
            );
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
        this.featureDetailsSubscription.unsubscribe();

    }

}
