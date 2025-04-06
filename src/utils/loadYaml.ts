import yaml from 'js-yaml';

export async function loadYamlConfig(path: string): Promise<any> {
  const res = await fetch(path);
  const text = await res.text();
  return yaml.load(text);
}