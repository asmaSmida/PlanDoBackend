import { Test, TestingModule } from '@nestjs/testing';
import { EstateFavController } from './estate-favorites.controller';

describe('EstateController', () => {
  let controller: EstateFavController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstateFavController],
    }).compile();

    controller = module.get<EstateFavController>(EstateFavController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
