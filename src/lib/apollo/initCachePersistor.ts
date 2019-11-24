import { NormalizedCacheObject } from 'apollo-boost';
import { ApolloCache } from 'apollo-cache';
import { CachePersistor } from 'apollo-cache-persist';
import { PersistedData, PersistentStorage } from 'apollo-cache-persist/types';

let persistor: any = null;

const initCachePersistor = (cache: ApolloCache<NormalizedCacheObject>): any => {
  if (!persistor && typeof window !== 'undefined') {
    persistor = new CachePersistor({
      cache,
      storage: window.localStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
    });
  }

  return persistor;
};

export default initCachePersistor;
