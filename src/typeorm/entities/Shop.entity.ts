import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'enterprise_details'})
export class Shop{
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ nullable:true })
    title_name: string;

    @Column({ nullable:true })
    email_id: string;

    @Column({ nullable:true })
    gstin: string;

    @Column({ nullable:true })
    trademark_name: string;

    @Column({ type: 'longtext'})
    shop_qr_code:string;

    @Column({ type: 'longtext', nullable: true})
    shop_logo:string;

    @Column({ type: 'longtext', nullable: true})
    shop_address:string;

    @Column({ type: 'date'})
    created_date: Date;

    @Column({ type: 'time'})
    created_time: Date;
}
