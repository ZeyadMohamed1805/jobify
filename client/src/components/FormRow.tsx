// Modules
import { FormRowPropsType } from "../utils/types";

const FormRow = ( { data: { type, name, label } }: FormRowPropsType ) => {
    return (
        <div className="form-row">
            <label htmlFor={ name } className="form-label">
                { label || name }
            </label>
            <input type={ type } id={ name } name={ name } className="form-input" required />
        </div>
    )
}

export default FormRow;