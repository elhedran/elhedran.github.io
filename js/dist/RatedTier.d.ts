/// <reference types="react" />
import * as Dew from 'rxjs-dew-react';
import { State, Service } from './Service';
import { Tier, Hero } from './hero';
export declare namespace RatedTier {
    type Props = {
        heroRatings: (Hero & {
            tags: string[];
        } & {
            tier: Tier;
        })[];
    };
}
export declare class RatedTier extends Dew.BoundConsumer<RatedTier.Props, State, keyof State> {
    state: State;
    protected store: Service;
    render(): JSX.Element;
}
