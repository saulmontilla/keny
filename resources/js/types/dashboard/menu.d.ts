import { UbiiIcon } from "ubiionline/icon";

export interface Menu {
    id: number,
    nombre: string,
    orden: number,
    parent_id: number,
    url: string,
    activo_regexp: string,
    icono: UbiiIcon,
    childrens: Menu[]
}