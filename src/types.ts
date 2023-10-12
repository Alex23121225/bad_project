export interface CharacterInfo {
    gender: string;
    name: string;
    status: string;
    species: string;
}

export interface Response {
    count: number;
    pages: number;
    prev: null;
    next: string;
    results: Results[];
    location: Location;
    origin: Origin;
}


export interface Results extends CharacterInfo {
    created: string;
    episode: Array<string>;
    id: number;
    image: string;
}

interface Location {
    name: string;
    url: string;
}

interface Origin {
    name: string;
    url: string;
}

export interface InfoCharacterProps {
    name: string;
    value?: string;
}
