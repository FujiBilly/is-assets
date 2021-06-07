export const ASSETS_TYPE: Record<string, string>;
export function assetsMapping(suffix: string): string;
export function assetsMapping(customMap: Record<string, string>): (suffix: string) => string;