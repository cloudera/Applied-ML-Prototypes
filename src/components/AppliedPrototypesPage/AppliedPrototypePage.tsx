import React, { FunctionComponent, useState } from 'react';
import Header from '../Header';
import { CatalogEntryType } from '../types';
import AppliedPrototypesContainer from './AppliedPrototypesContainer'

interface Props {}


const AppliedPrototypesPage: FunctionComponent<Props> = () => {
  const [catalogEntryType, setCatalogEntryType] = useState<CatalogEntryType>(CatalogEntryType.CLOUDERA_AMPS)  
  const onSelect = (type: CatalogEntryType) => setCatalogEntryType(type);

  return (
    <>
      <Header onSelect={onSelect} catalogEntryType={catalogEntryType} />
      <AppliedPrototypesContainer catalogEntryType={catalogEntryType} />
    </>
  );
}

export default AppliedPrototypesPage;
