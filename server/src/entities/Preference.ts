import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Preference {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    primaryEmail: string;

    @Column({
        length: 50
    })
    secondaryEmail: string;

    @Column()
    primaryEmailCheckbox: boolean;

    @Column()
    deviceTrackingCheckbox: boolean;

    @Column()
    secondaryEmailCheckbox: boolean;
    
}