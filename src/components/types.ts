export interface CatalogEntry {
    id: number;
    catalogSourceId: number;
    catalogSource: CatalogSource;
    title: string;
    short_description: string;
    is_prototype: boolean;
    git_url: string;
    enabled: boolean;
    coming_soon: boolean;
    long_description?: string;
    long_description_hrml?: string;
    image_path?: string;
    tags?: string[];
    updated_at: string;
    is_new?: boolean;
    is_notebook?: boolean;
    is_community?: boolean;
    is_huggingface_space?: boolean;
    type?: string;
    gitRef?: string;
  }

  export interface CatalogSource {
    id: number;
    name: string;
    url: string;
    path?: string;
  }

  export enum CatalogEntryType {
    CLOUDERA_AMPS = 'CLOUDERA_AMPS',
    HUGGING_FACE = 'HUGGING_FACE',
    COMMUNITY_AMPS = 'COMMUNITY_AMPS'
  }