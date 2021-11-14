import { Entity } from "@subql/types";
export declare class StarterEntity implements Entity {
    constructor(id: string);
    id: string;
    field1: number;
    field2?: string;
    field3?: bigint;
    field4?: Date;
    field5?: boolean;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<StarterEntity | undefined>;
    static create(record: any): StarterEntity;
}
