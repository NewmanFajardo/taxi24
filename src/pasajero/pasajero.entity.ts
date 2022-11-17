import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { ViajeEntity } from "../viaje/viaje.entity";

@Entity("pasajero")
export class PasajeroEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    
    @Column()
    apellido: string;

    @Column()
    dni: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;

    @OneToMany(() => ViajeEntity, (viaje) => viaje.pasajero)
    viajes: ViajeEntity[];
}