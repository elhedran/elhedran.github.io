import { SemanticCOLORS } from 'semantic-ui-react';
import { State } from './Service';
import './find';
export declare namespace Tier {
    const God = 4;
    const DemiGod = 3;
    const Amazing = 2;
    const Good = 1;
    const Meh = 0;
}
export declare type Tier = number;
export declare enum HeroClass {
    Skill = "Skill",
    Science = "Science",
    Mystic = "Mystic",
    Cosmic = "Cosmic",
    Tech = "Tech",
    Mutant = "Mutant",
}
export declare type TagAdjust = {
    awake?: number;
    highSig?: number;
    mysticDisperion?: number;
};
export declare type Hero = {
    heroId: string;
    name: string;
    heroClass: HeroClass;
};
export declare type HeroRating = {
    heroId: string;
    tier: Tier;
    tags?: TagAdjust;
    synergy?: {
        [key: string]: number;
    };
};
export declare const heros: Hero[];
export declare const heroCompare: (a: Hero, b: Hero) => number;
export declare const heroColor: (a: Hero) => SemanticCOLORS;
export declare const scoredChampions: (myHeroes: boolean, state: State, ratings: HeroRating[]) => {
    tier: number;
    tags: string[];
    heroId: string;
    name: string;
    heroClass: HeroClass;
}[];
