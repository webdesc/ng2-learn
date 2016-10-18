export interface IResort {
    id: number;
    name: string;
    description: string;
    phone: string;
    images: string[];
    weather: {
        temperature_water: number;
        temperature_air: number;
        cloudiness: string;
    };
    follows: {
        followers: number;
        following: number;
    }
}