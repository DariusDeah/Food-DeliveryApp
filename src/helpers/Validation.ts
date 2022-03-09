import { BadRequestException } from "../utils/Errors";

export class Validation{
  public static requiredString(field:string,errorMessage:string):string|void{
    if (!field || !field.length) throw new BadRequestException(errorMessage);
    return
  }
  public static requiredInt(field: number, errorMessage: string):string|void {
  if(!field || field <= 0 ) throw new BadRequestException(errorMessage)
return
  }
  public static matchesValue(field:string,value:string,errorMessage:string) {
    if(field !== value) throw new BadRequestException(errorMessage)
  }
  public static matchesValues(field: string, values: string[],errorMessage:string) {
    if(!values.includes(field)) throw new BadRequestException(errorMessage)
  }
  public static isEmail(field:string,errorMessage:string) {
    //temporary validation might replace with regEx
    const emailFormat: RegExp = /\@[a-z]*\b\.\b[a-z]*\b/;
    if(!field.length || !field.match(emailFormat)) throw new BadRequestException(errorMessage)
  }


}