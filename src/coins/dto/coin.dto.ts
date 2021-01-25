import { IsString } from 'class-validator';

export class Coin {
  @IsString()
  readonly symbol: string;
  @IsString()
  readonly close_price: string;
  @IsString()
  readonly open_price: string;
  @IsString()
  readonly high_price: string;
  @IsString()
  readonly low_price: string;
  @IsString()
  readonly trade_price_24H: string;
  @IsString()
  readonly trade_volume_24H: string;
}
