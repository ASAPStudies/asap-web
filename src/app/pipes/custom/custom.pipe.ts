import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    standalone:true,
    name:'fuck'
})

export class CustomPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return `fuck ${ value } fuck `
    }

}