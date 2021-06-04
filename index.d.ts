export const ASSETS_TYPE: Map<string, string>;
export function assetsMapping(suffix: string): string;
export function assetsMapping(customMap: Map<string, string>): (suffix: string) => string;