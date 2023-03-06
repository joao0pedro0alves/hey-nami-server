import { v4 } from 'uuid';

export class Entity<Props> {
    public readonly id: string;
    public props: Props;

    constructor(props: Props, id?: string) {

        if (typeof id === 'string') {
            this.id = id
        }

        this.props = props
        this.id = v4()
    }
}