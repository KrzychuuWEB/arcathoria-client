import PropTypes from "prop-types";

const TextFieldWithLabel = ({formik, name, type = "text", label}) => {
    return (
        <div className="mb-2">
            <label className="block text-text-secondary font-medium mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                name={name}
                type={type}
                id={name}
                className="w-full px-4 py-2 border border-primary rounded-lg bg-gray-900 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            {formik.touched[name] && formik.errors[name] ? (
                <div className="flex items-center text-red-500 text-sm">
                    <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M18.364 5.636a9 9 0 11-12.728 0 9 9 0 0112.728 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01"/>
                    </svg>
                    {formik.errors[name]}
                </div>
            ) : null}
        </div>
    );
};

TextFieldWithLabel.propTypes = {
    formik: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
}

export default TextFieldWithLabel;