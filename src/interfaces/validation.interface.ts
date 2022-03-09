export interface Validator {
  /**
     * If the required string field is missing throws a BadRequestException Error with a 404 status and the provided error message
     * @param field Field to validate
     * @param errorMessage Error message sent upon failure
     */
  requiredString(field: string, errorMessage: string): void;

  /**
     * If the required number field is missing throws a BadRequestException Error with a 404 status and the provided error message
     * @param field Field to validate
     * @param errorMessage Error message sent upon failure
     */
  requiredInt(field: number, errorMessage: string): void;

  /**
     * If the field does not match given value throws a BadRequestException Error with a 404 status and the provided error message
     * @param field Field to validate
     * @param value Value the field should match
     * @param errorMessage Error message sent upon failure
     */
  matchesValue(field: string, value: string, errorMessage: string): void

  /**
     * If the field is not found in given array of values throws a BadRequestException Error with a 404 status and the provided error message
     * @param field Field to validate
     * @param values Array of values field should be found in 
     * @param errorMessage Error message sent upon failure
     */
  matchesValues(field: string, values: string[], errorMessage: string): void

  /**
   * Validates the provided field matches an email format of '__@lorem.ipsum' if not throws a BadRequestException Error with a 404 status and the provided error message
     * @param field Field to validate
     * @param errorMessage Error message sent upon failure
     */
  isEmail(field: string, errorMessage: string): void

  /**
     * If the field length is less than given required length, throws a BadRequestException Error with a 404 status and the provided error message
     * @param field field to validate
     * @param requiredLength Minimum required field length
     * @param errorMessage Error message sent upon failure
     */
  validateLength(field: string, requiredLength: number, errorMessage: string): void

  /**
     * If the given file size is larger than the given limit  
     * @param fileSize file size to validate
     * @param limit Maximum limit for given file size, denoted in 'file-size + file-size unit' syntax  ex: '10mb' || '100kb' 
     * @param errorMessage Error message sent upon failure
     */
  fileSizeValidation(fileSize: number, limit: string, errorMessage: string): void
}