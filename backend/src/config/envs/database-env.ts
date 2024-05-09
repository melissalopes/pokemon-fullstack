export class DatabaseEnvs {
  static readonly URI = process.env.MONGO_URI || 'mongodb+srv://melmelissalopg:r5SjZtrqS7yTmr2o@teste.zr8i5vl.mongodb.net/?retryWrites=true&w=majority&appName=teste';

  static readonly DATABASE = process.env.MONGO_DATABASE;
}
