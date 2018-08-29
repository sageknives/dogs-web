import { DogsModule } from './dogs.module';

describe('DogsModule', () => {
  let dogsModule: DogsModule;

  beforeEach(() => {
    dogsModule = new DogsModule();
  });

  it('should create an instance', () => {
    expect(dogsModule).toBeTruthy();
  });
});
