import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
name : 'convert'
})

export class ConvertPipe implements PipeTransform {
    constructor(){}
    
    transform(val : number,depart : String, arrivee : String) {
        let devises = new Map<string, number>();
        devises.set("FCFA", 1);
        devises.set("Euro", 655.957);
        devises.set("Dollar us", 575.500);
        devises.set("Yen japonais", 5.075);
        devises.set("Livre sterling", 768.250);
        devises.set("Franc suisse", 626.750);
        devises.set("Dollar canadien", 450.500);
        devises.set("Yuan chinois", 90.86);
        devises.set("Dirham Emirates", 157.58);
        devises.set("peso mexicain", 27.06);

    for (const key of devises.keys()) {
        if(depart==key){
            if(devises.has(String(arrivee)))
                return Number(devises.get(String(depart)))*val/Number(devises.get(String(arrivee)));
        }   
    }
    return val;
    }
}