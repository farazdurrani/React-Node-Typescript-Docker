import app from '../app';
import * as sinon from "sinon"
import * as repo from "../repositories/repository";
import * as request from "supertest";

describe('API tests', () => {
    it('checks application\'s health', async () => {
        const result = await request(app).get('/api/health');
        expect(JSON.parse(result.text)).toEqual({
            "status": "up",
        });
        expect(result.statusCode).toEqual(200);
    });

    it('updates user\'s preferences', async () => {
        var stub = sinon.stub(repo, "insert")
                .returns({id: 555});
        const body = {
            primaryEmailCheckbox: true,
            deviceTrackingCheckbox: false,
            secondaryEmailCheckbox: false,
            primaryEmail: "a@b.c",
            secondaryEmail: "x@y.z"
          }
        const result = await request(app).post('/api/preferences').send(body);
        expect(JSON.parse(result.text)).toEqual({id: 555});
        expect(result.statusCode).toEqual(200);
    });
})
