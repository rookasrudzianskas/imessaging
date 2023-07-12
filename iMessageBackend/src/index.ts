import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post('/login', async (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ error: 'Username is missing' });
  }

  const user = await prisma.user.upsert({
    where: { username },
    create: {
      username,
      name: username,
    },
    update: {
      username,
    },
  });

  return res.json({
    ...user,
  });
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();

  return res.json(users);
});

app.listen(3000, () => {
  console.log(`Server ready at: http://localhost:3000`);
});
