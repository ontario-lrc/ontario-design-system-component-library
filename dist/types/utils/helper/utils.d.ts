export declare function format(first: string | undefined, middle: string | undefined, last: string | undefined): string;
export declare function hasMultipleTrueValues<T>(arr: T[], key: keyof T): boolean;
export declare function extractValuesByKey<T>(objects: T[], key: keyof T): Array<T[keyof T]>;
export declare function organizeObjectKeys(data: any[], columns: string[]): any[];
export declare function removeObjectsBySpecificKey<T>(objects: T[], key: keyof T, value: boolean | 'true'): [T[], T[]];
export declare function isNumber(str: string): boolean;
export declare function isEmpty(str: string | undefined | null): boolean;
