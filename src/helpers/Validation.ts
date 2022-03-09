import { Validator } from "../interfaces/validation.interface";
import { BadRequestException } from "../utils/Errors";

class Validations implements Validator {
  public  requiredString(field:string,errorMessage:string):void{
    if (!field || !field.length) throw new BadRequestException(errorMessage);
    
  }
  
  public  requiredInt(field: number, errorMessage: string):void {
  if(!field || field <= 0 ) throw new BadRequestException(errorMessage)
  }
  public  matchesValue(field:string,value:string,errorMessage:string):void {
    if(field !== value) throw new BadRequestException(errorMessage)
  }
  public  matchesValues(field: string, values: string[],errorMessage:string):void {
    if(!values.includes(field)) throw new BadRequestException(errorMessage)
  }
  public  isEmail(field:string,errorMessage:string):void {
    const emailFormat: RegExp = /\@[a-z]*\b\.\b[a-z]*\b/;

    if(!field.length || !field.match(emailFormat)) throw new BadRequestException(errorMessage)
  }
  public  validateLength(field: string, requiredLength: number, errorMessage: string):void {
  if(field.length < requiredLength) throw new BadRequestException(errorMessage)
  }
  public  fileSizeValidation(fileSize: number, limit: string, errorMessage: string):void {
    //would be neat if caller could specify file size in format: '10mb' , '100mb'
    enum validFileFormats {
      kb = 'kb',
      mb = 'mb',
      gb = 'gb'
    }
    //make sure the callers given format is valid
    
    const conversionsFromKiloBytes = {
      kb: 1024,
      mb: Math.pow(1024, 2),
      gb: Math.pow(1024, 3)
    }
    //by default the file size limit is the size of the provided file 
    let fileSizeLimit: number = fileSize;
    const sizeFormat = limit.match(/[a-z]/g)?.join("")
    const sizeValue = limit.match(/[0-9]/g)?.join("")
    console.log({sizeValue})
    if (sizeFormat?.length && sizeValue?.length) {
     fileSizeLimit = parseInt(sizeValue,10) * conversionsFromKiloBytes[sizeFormat];
    }

    
    if (sizeFormat !== validFileFormats.kb && sizeFormat !== validFileFormats.mb && sizeFormat !== validFileFormats.gb) return;
    if(fileSize > fileSizeLimit) throw new BadRequestException(errorMessage)
  }
  

}
export const Validation = new Validations() 