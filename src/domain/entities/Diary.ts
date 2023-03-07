import { Entity } from "../Entity";
import { Pet } from "./Pet";
import { FamilyMember } from "./FamilyMember";

export interface DiaryProps {
    owner: FamilyMember;
    pets?: Pet[];
    family?: FamilyMember[];
    createdAt?: Date;
}

export class Diary extends Entity<DiaryProps> {
    constructor(props: DiaryProps, id?: string) {       
        
        if (!id) {
            props.createdAt = new Date()
            props.family = [props.owner]
            props.pets = []
        }
        
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