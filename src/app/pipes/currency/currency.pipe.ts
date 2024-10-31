import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'ghs',
    standalone:true
})
export class GhanaCedisPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return `GH₵ ${value}`;
    }
}