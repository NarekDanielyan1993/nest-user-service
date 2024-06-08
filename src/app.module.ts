import { Module } from '@nestjs/common';
import { AppConfigModule } from 'src/config/config.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AppConfigModule, UserModule],
})
export class AppModule {}
