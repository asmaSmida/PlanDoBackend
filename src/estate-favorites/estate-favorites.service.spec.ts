import { Test, TestingModule } from '@nestjs/testing';
import { EstateFavService } from './estate-favorites.service';

describe('EstateFavService', () => {
  let service: EstateFavService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstateFavService],
    }).compile();

    service = module.get<EstateFavService>(EstateFavService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
