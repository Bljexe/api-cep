import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CepModule } from './cep/cep.module';

@Module({
  imports: [PrismaModule, CepModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
