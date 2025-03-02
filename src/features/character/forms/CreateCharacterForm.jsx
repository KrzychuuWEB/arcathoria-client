import { useFormik } from "formik";
import TextFieldWithLabel from "../../../components/fields/TextFieldWithLabel.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import { createCharacterSchema } from "../validations/createCharacterValidation.js";

const CreateCharacterForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: createCharacterSchema,
        onSubmit: (values, { setFieldError, setSubmitting }) => {
            console.log(values);
        },
    });

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextFieldWithLabel formik={formik} label="Nazwa postaci" name="name" />

            <div className="flex justify-end items-center mt-5 mr-5">
                <PrimaryButton disabled={formik.isSubmitting} type="submit">
                    Stwórz postać
                </PrimaryButton>
            </div>
        </form>
    );
};

export default CreateCharacterForm;
