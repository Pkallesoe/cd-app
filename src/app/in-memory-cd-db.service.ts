import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryCDDBService implements InMemoryDbService {
  createDb() {
    const cds = [
      { id: 1, artist: 'Mr. Nice', album: 'album1', genre: 'heavy', year: 1999 },
      { id: 2, artist: 'Narco', album: 'album1', genre: 'heavy', year: 1939 },
      { id: 3, artist: 'Bombasto', album: 'album1', genre: 'heavy', year: 1991 },
      { id: 4, artist: 'Celeritas', album: 'album1', genre: 'rock', year: 2001 },
    ];
    return {cds};
  }
}