/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */
import { render } from "@testing-library/react";
import { Entry as EntryType } from '../types';
import Entry from '../PatientPage/Entry';

const entry: EntryType = {
  type: 'Hospital',
  id: '123456',
  discharge: {
    date: '1/1/2001',
    criteria: 'criteria'
  },
  description: 'description',
  date: '1/1/2001',
  specialist: "specialist",
};

describe('<Entry />', () => {
  test('should display a patient', () => {
    const { getByText } = render(
      <Entry entry={entry} diagnosis={null} />
    );

    expect(getByText('Hospital')).toBeDefined();
    expect(getByText('description')).toBeDefined();
    expect(getByText('specialist')).toBeDefined();
  });
});