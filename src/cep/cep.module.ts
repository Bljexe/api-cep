import { Module } from '@nestjs/common';
import { CepService } from './cep.service';
import { CepController } from './cep.controller';

@Module({
  controllers: [CepController],
  providers: [CepService],
})
export class CepModule {}
