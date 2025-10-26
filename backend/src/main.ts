import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 전역 ValidationPipe 설정
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의되지 않은 속성 제거
      forbidNonWhitelisted: true, // 허용되지 않은 속성 요청 시 에러
      transform: true, // 자동 타입 변환 (string → number 등)
    }),
  );

  // CORS 설정 (프론트엔드와 통신을 위해)
  app.enableCors({
    origin: 'http://localhost:5173', // Vite 기본 포트
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Server is running on: http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();
