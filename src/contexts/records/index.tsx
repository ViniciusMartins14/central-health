import { RecordContextManager } from '@/domain/interfaces/record-props';
import { RecordModel } from '@/domain/models/record-model';
import { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export const RecordContext = createContext({} as RecordContextManager);

const RecordProvider = ({ children }: Props) => {
  const [records, setRecords] = useState<RecordModel[]>([
    {
      id: 1,
      name: 'Hospital Albert Einstein',
      lastReview: 'sun oct 20. 12PM',
      totalReviews: 4,
    },
    {
      id: 2,
      name: 'Hospital Sírio Libanês',
      lastReview: 'sun oct 20. 12PM',
      totalReviews: 4,
    },
    {
      id: 3,
      name: 'Hospital São Luiz',
      lastReview: 'sun oct 20. 12PM',
      totalReviews: 4,
    },
    {
      id: 4,
      name: 'Hospital Santa Isabel',
      lastReview: 'sun oct 20. 12PM',
      totalReviews: 4,
    },
  ]);

  return (
    <RecordContext.Provider value={{ records: records }}>
      {children}
    </RecordContext.Provider>
  );
};

export default RecordProvider;
