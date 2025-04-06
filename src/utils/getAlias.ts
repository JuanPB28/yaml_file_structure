export function getAlias(obj: any, path: string, fallback?: any): any {
  return path.split('.').reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return acc[key];
    }
    return fallback;
  }, obj);
}