import { Country } from "./country.model";
import { Data } from "./data.model";

export interface Player {
    id: number;
    firstname: string;
    lastname: string;
    shortname: string;
    sex: string;
    country: Country;
    picture: string;
    data: Data;
}