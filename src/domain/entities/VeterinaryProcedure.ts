import { Entity } from "../Entity";

export type VeterinaryProcedureKinds = 'exam' | 'medicine' | 'surgery'

export interface VeterinaryProcedureProps {
    title: string;
    description: string;
    kind: VeterinaryProcedureKinds;
}

export class VeterinaryProcedure extends Entity<VeterinaryProcedureProps> {
    constructor(props: VeterinaryProcedureProps, id?: string) {
        super(props, id)
    }
}