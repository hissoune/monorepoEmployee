import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({defaultStrategy:'keycloak'})],
  controllers: [AuthServiceController],
  providers: [AuthServiceService],
  exports:[PassportModule]
})
export class AuthServiceModule {}
