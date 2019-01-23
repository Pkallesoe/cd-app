import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryCDDBService implements InMemoryDbService {
  createDb() {
    const cds = [
      { id: 1, artist: 'Rammstein', album: 'Mutter', genre: 'rock', year: 2001 },
      { id: 2, artist: 'Johnny Madsen', album: 'Le New York', genre: 'rock', year: 2011 },
      { id: 3, artist: 'Mozart ', album: 'The Great Piano Concertos', genre: 'piano', year: 1991 },
      { id: 4, artist: 'Metallica', album: 'Kill em All', genre: 'heavy', year: 1983 },
    ];
    return {cds};
  }
}