import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: 'Eddyslut linnaaa',
  ShirtNum: 2,
  SP: 'Lidcombe 2141',
  DOB: '19/01/1998',
  MobileNum: '0401444222',
}));

export default users;
