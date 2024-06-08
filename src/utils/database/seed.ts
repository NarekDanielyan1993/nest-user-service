import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { User } from 'src/user/user.entity';
import { DataSource } from 'typeorm';

async function seed() {
  const app = await NestFactory.create(AppModule);
  const dataSource = app.get(DataSource);
  const userRepository = dataSource.getRepository(User);

  const users = [];
  for (let i = 0; i < 1000000; i++) {
    const user = new User();
    user.name = `Name${i}`;
    user.surname = `Surname${i}`;
    user.age = Math.floor(Math.random() * 100);
    user.gender = Math.random() > 0.5 ? 'Male' : 'Female';
    user.problems = Math.random() > 0.5;
    users.push(user);
  }

  await userRepository.save(users, { chunk: 30 });
  await app.close();
}

seed().catch((error) => console.error(error));
