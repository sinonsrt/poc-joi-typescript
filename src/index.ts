import { convertFromDirectory } from 'joi-to-typescript';
import { Person } from './interfaces';

convertFromDirectory({
  schemaDirectory: './src/schemas',
  typeOutputDirectory: './src/interfaces',
  debug: true,
});

({ firstName, lastName, job, wallet }: Person) => {};
