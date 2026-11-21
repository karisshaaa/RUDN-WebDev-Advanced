import { app } from './app.ts';
import express from 'express';
import { cardsRouter } from './routes/cards.router.ts';

const port = 3001;

app.use(express.json());
app.use(cardsRouter);


app.listen(port, () => {
    console.log('Я работаю')
});