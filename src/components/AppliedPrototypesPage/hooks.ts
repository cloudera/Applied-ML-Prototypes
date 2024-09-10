
import { useEffect, useState } from 'react';
import { parse } from 'yaml';
import { CatalogEntry } from '../types';

const COMMUNITY_AMP_URL = 'https://raw.githubusercontent.com/cloudera/Community-Applied-ML-Prototypes/master/community-amp-catalog-default.yaml';

const HUGGING_FACE_AMP_URL = 'https://raw.githubusercontent.com/cloudera/HuggingFace-Spaces/master/huggingface-space-catalog-default.yaml';

const CLOUDERA_AMP_URL = 'https://raw.githubusercontent.com/cloudera/Applied-ML-Prototypes/master/amp-catalog-cloudera-default-new.yaml';


export enum CatalogEntryType {
  CLOUDERA_AMPS = 'CLOUDERA_AMPS',
  HUGGING_FACE = 'HUGGING_FACE',
  COMMUNITY_AMPS = 'COMMUNITY_AMPS'
}

export const getUrl = (catalogEntryType: CatalogEntryType) => {
  if (catalogEntryType === CatalogEntryType.CLOUDERA_AMPS) {
    return CLOUDERA_AMP_URL;
  } else if (catalogEntryType === CatalogEntryType.HUGGING_FACE) {
    return HUGGING_FACE_AMP_URL;
  } else {
    return COMMUNITY_AMP_URL;
  }
}


export const useCommunityAmps = (catalogEntryType: CatalogEntryType) => {
  const [catalogEntries, setCatalogEntries] = useState<CatalogEntry[]>([])
  const fetchCommunityAmps = async (fetchParams: any) => {
    let resp = await fetch(getUrl(catalogEntryType), {
      method: 'GET' 
    });
    const body = await resp.text();
    if (body) {
      const obj = parse(body);
      const entities = obj.entries.map((catalogEntry: CatalogEntry) => ({
        ...catalogEntry,
        type: catalogEntryType
      }));
      setCatalogEntries(entities as CatalogEntry[]);
    }
    return resp;
  }  

  useEffect(() => {
    fetchCommunityAmps(catalogEntryType);
  }, [catalogEntryType]);

  return {
    catalogEntries
  };          
}