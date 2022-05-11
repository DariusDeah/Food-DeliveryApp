import { Validator } from "../interfaces/validation.interface";
import { BadRequestException } from "../utils/Errors.util";

class Validations implements Validator {
  isEmail(field: string, errorMessage: string): void {
    throw new Error("Method not implemented.");
  }
  public requiredString(field: string, errorMessage: string): Validations {
    if (!field || !field.length) throw new BadRequestException(errorMessage);
    return this;
  }

  public requiredInt(field: number, errorMessage: string): Validations {
    if (!field || field <= 0) throw new BadRequestException(errorMessage);
    return this;
  }
  public matchesValue(
    field: string,
    value: string,
    errorMessage: string
  ): Validations {
    if (field !== value) throw new BadRequestException(errorMessage);
    return this;
  }
  public matchesValues(
    field: string,
    values: string[],
    errorMessage: string
  ): Validations {
    if (!values.includes(field)) throw new BadRequestException(errorMessage);
    return this;
  }
  public validateEmail(field: string, errorMessage: string): Validations {
    const emailFormat: RegExp = /\@[a-z]*\b\.\b[a-z]*\b/;

    if (!field.length || !field.match(emailFormat))
      throw new BadRequestException(errorMessage);
    return this;
  }
  public validateLength(
    field: string,
    requiredLength: number,
    errorMessage: string
  ): Validations {
    if (field.length < requiredLength)
      throw new BadRequestException(errorMessage);
    return this;
  }
  public fileSizeValidation(
    fileSize: number,
    limit: string,
    errorMessage: string
  ): Validations {
    //would be neat if caller could specify file size in format: '10mb' , '100mb'
    //step 1: make sure the callers given format is valid
    enum validFileUnits {
      kb = "kb",
      mb = "mb",
      gb = "gb",
    }

    const unitConversionsFromKiloBytes = {
      kb: 1024,
      mb: Math.pow(1024, 2),
      gb: Math.pow(1024, 3),
    };

    //by default the file size limit is the size of the provided file
    let fileSizeLimit: number = fileSize;
    const limitUnit = limit.match(/[a-z]/g)?.join("");
    const limitValue = limit.match(/[0-9]/g)?.join("");

    // step 2: if limit unit is not a valid unit type end function and return (choose instant look up over loops and iterations)
    if (
      limitUnit !== validFileUnits.kb &&
      limitUnit !== validFileUnits.mb &&
      limitUnit !== validFileUnits.gb
    ) {
      return
      
    }
    //step 3: if RegExp finds a valid limit unit and limit value multiply limit value by according limit unit conversion
    if (limitUnit.length && limitValue?.length) {
      fileSizeLimit =
        parseInt(limitValue, 10) * unitConversionsFromKiloBytes[limitUnit];
    }
    //step 4
    if (fileSize > fileSizeLimit) throw new BadRequestException(errorMessage);
    return this;
  }
}
export const Validation = new Validations();
