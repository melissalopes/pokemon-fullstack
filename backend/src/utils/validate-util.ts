import { Schema } from 'joi';
import { BadRequest } from './response-util';
import { HttpResponseDTO } from './dto/http-dto';

export class ValidationUtils {
    public static validate(
        schema: Schema,
        object: unknown
    ): HttpResponseDTO | void {
        const validate = schema.validate(object, { allowUnknown: true });
        if (validate.error) {
            throw new BadRequest(validate.error.message);
        }
    }
}
