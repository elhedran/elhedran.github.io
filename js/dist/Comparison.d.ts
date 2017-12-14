/// <reference types="react" />
import * as Dew from 'rxjs-dew-react';
import { State, Service } from './Service';
import { HeroRating } from './hero';
export declare namespace Comparison {
    type Props = {
        offense: HeroRating[];
        defense: HeroRating[];
    };
    type S = State & {
        myHeros?: boolean;
    };
}
export declare class Comparison extends Dew.BoundConsumer<Comparison.Props, Comparison.S, keyof State> {
    state: Comparison.S;
    protected store: Service;
    render(): JSX.Element;
}
