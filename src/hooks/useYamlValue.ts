import { useEffect, useState } from 'react';
import { loadYamlConfig } from '../utils/loadYaml';
import { getAlias } from '../utils/getAlias';

let cachedConfig: any = null;

export function useYamlValue(path: string): string | null {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAndGet() {
      if (!cachedConfig) {
        cachedConfig = await loadYamlConfig('/config.yaml');
      }
      const result = getAlias(cachedConfig, path, null);
      setValue(result);
    }

    fetchAndGet();
  }, [path]);

  return value;
}