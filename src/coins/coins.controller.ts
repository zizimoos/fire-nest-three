import { Controller, Get } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { Coin } from './dto/coin.dto';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}
  private coins: Coin[];

  @Get()
  async getAll(): Promise<Coin[]> {
    return this.coinsService.getAll();
  }
}
