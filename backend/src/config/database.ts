import mongoose from 'mongoose';
import { DatabaseEnvs } from './envs';

export class DatabaseConfig {
    async connect(): Promise<void> {
        try {
            console.log(`Connecting to database URI: ${DatabaseEnvs.URI}`);
            await mongoose.connect(DatabaseEnvs.URI, {
                serverSelectionTimeoutMS: 5000,
                dbName: DatabaseEnvs.DATABASE,
            });
            console.log('Database successfully connected!');
        } catch (error) {
            console.log('Could not connect to database:', error);
            throw error;
        }
    }
}
