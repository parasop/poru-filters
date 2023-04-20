import { Player, Filters } from "poru";
export declare class Filter extends Filters {
    band: number;
    gain: number;
    slowmode: boolean;
    nightcore: boolean;
    vaporwave: boolean;
    _8d: boolean;
    bassboost: number;
    constructor(player: Player);
    setSlowmode(val: boolean): this;
    setNightcore(val: any): any;
    setVaporwave(val: boolean): void;
    set8D(val: any): void;
}
