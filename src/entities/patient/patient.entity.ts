import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string

    @Column()
    city: string

    @Column()
    state: string

    @Column()
    zipcode: string

    @Column()
    county: string

    @Column()
    cell_number: string

    @Column()
    email: string

    @Column()
    ethnicity: string

    @Column()
    race: string

    @Column()
    gender: string

    @Column()
    social_security: string

    @Column()
    insurance_patient_id: string

    @Column()
    insurance_group_id: string;

    @Column()
    appointment_time: string

    @Column()
    insured: boolean

    @Column()
    persistent_cough: boolean;

    @Column()
    shortness_of_breath: boolean

    @Column()
    fever: boolean

    @Column()
    sure_exposure: boolean

    @Column()
    suspected_exposure: boolean

    @Column()
    birthday: Date

    @Column()
    form_filled_date: Date;

}
