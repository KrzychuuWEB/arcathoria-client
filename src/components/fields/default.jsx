import PropTypes from "prop-types";

const DefaultTextField = ({formik, placeholder, name, type = "text", label}) => {
    return (
        <div className="mb-4">
            <label className="block text-arcane-purple-200 font-medium mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                name={name}
                type={type}
                id={name}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-arcane-purple rounded-lg bg-gray-900 text-purple-100 placeholder-arcane-purple-300 focus:outline-none focus:ring-2 focus:ring-arcane-purple-700"
            />
            {formik.touched[name] && formik.errors[name] ? (
                <div className="flex items-center mt-2 text-red-500 text-sm">
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

DefaultTextField.propTypes = {
    formik: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
}

export default DefaultTextField;