import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 11, name: 'Australia' },
      { id: 12, name: 'Peoples Republic of China'},
      { id: 13, name: 'United States of America' },
      { id: 14, name: 'Bolivarian Republic of Venezuela' },
      { id: 15, name: 'United Kingdom' },
      { id: 16, name: 'France' },
      { id: 17, name: 'Russian Federation' },
      { id: 18, name: 'Kuwait' },
      { id: 19, name: 'Syrian Arab Republic' },
      { id: 20, name: 'Canada' }
    ];
    return {members};
  }
}
