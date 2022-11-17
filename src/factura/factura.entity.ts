import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { ViajeEntity } from "../viaje/viaje.entity";

@Entity("factura")
export class FacturaEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    estatus: string;
    
    @Column()
    monto: number;

    @OneToOne(() => ViajeEntity, (viaje) => viaje.factura)
    @JoinColumn({
        name: 'viajeId'
    })
    viaje: ViajeEntity;
}