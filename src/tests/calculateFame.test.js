import {mockPB, mockFame} from './mockPB';
import {calculateRunnerFame} from '../helper/countRunnerFame'

test('test calculate fame returns proper value', () =>{
  expect(calculateRunnerFame(mockPB)).toMatchObject(mockFame);
})