import { createPool } from 'mysql2';
import { databaseCredentials } from '../config';
import { danger, success } from './../helper';

export class DB {
    public pool: any = null;

    connect = () => {
        if (this.pool) return this.pool;
        else return this.pool = createPool(databaseCredentials);
    }

    execute = async (query: String, params?: Array<string | number>) => {
        const conn = await this.connect();

        return new Promise((resolve, reject) => {
            conn.query(query, params, (err: any, results: any) => {
                if (err) return reject(err);
                else return resolve(results);
            });
        });
    };

    kill = () => {
        if (this.pool) {
            setTimeout(() => {
                this.pool.end();
                this.pool = null;
                return danger('Connection Destroyed...')
            }, 5000);
        }
        else return danger('No Connection to kill.')
    }
}