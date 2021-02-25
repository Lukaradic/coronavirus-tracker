export interface Data {
    confirmed: number;
    recovered: number;
    critical: number;
    deaths: number;
    lastChange?: string;
    lastUpdate?: string;
  }


export interface CountryData {
    confirmed: number;
    recovered: number;
    critical: number;
    deaths: number;
    lastChange?: string;
    lastUpdate?: string;
    code: string,
    latitude? : number
    longitude? : number
}

export interface CountryProps {
    confirmed: number;
    recovered: number;
    deaths: number;
}