import { Entity } from "../Entity";
import { Animal } from "./Animal";
import { Tutor } from "./Tutor";

export interface DiaryProps {
    owner: Tutor;
    pets: Animal[];
    family: Tutor[];
    createdAt?: Date;
}

export class Diary extends Entity<DiaryProps> {
    constructor(props: DiaryProps, id?: string) {
        props.createdAt = new Date()
        props.family.push(props.owner)
        
        super(props, id)
    }

    get owner() {
        return this.props.owner
    }
    
    get pets() {
        return this.props.pets
    }
    
    get family() {
        return this.props.family
    }
}