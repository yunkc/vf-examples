import { Express } from "../types/Action";

export enum Ids {
    root,
    followLine,
    button,
    slider,
}

export enum AssetId{
    up,
    move,
    down,
    thumb,
    track,
    tracklight
}

export namespace App {
    export const name = 'VFT2J';
    export const width = 405;
    export const height = 720;
    export const baseUrl = '';
    export const conversion = '';
    export const version = '0.0.1';
}
