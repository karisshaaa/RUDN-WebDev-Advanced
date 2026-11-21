import {describe, expect,it} from 'vitest';
import {app} from '../app.ts';
import request from 'supertest'
describe('API/cards',() => {
    it('GET /cards', async() => {
        const res = await request(app).get('/cards');

        expect(res.statusCode).toBe(200)
        expect(res.body.length).toBe(3);

        for (const card of res.body){
            expect(card.id).toBeDefined();
            expect(card.title).toBeDefined();
            expect(card.isDone).toBeDefined();
            expect(card.isUrgent).toBeDefined();
        }
    });
})