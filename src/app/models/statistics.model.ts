export interface IStatisticsResponse {

    "continent": string;
    "country": string;
    "population": number;
    "cases": {
        "new": string;
        "active": number;
        "critical": number | null;
        "recovered": number;
        "1M_pop": string;
        "total": number;
    };
    "deaths": {
        "new": string,
        "1M_pop": string,
        "total": number
    };
    "tests": {
        "1M_pop": string,
        "total": number
    };
    "day": string;
    "time": string;
}