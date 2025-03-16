import { useFormik } from "formik";
import TextFieldWithLabel from "../../../components/fields/TextFieldWithLabel.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import { createCharacterSchema } from "../validations/createCharacterValidation.js";
import { paths as routes } from "../../../routes/paths.js";
import { mapApiDetailsToFieldError } from "../../../utils/mapApiDetailsToFieldError.js";
import characterService from "../../../api/services/characterService.js";
import useNotification from "../../../hooks/useNotification.jsx";
import { useNavigate } from "react-router-dom";

const CreateCharacterForm = () => {
    const { successNotification } = useNotification();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            characterName: "",
        },
        validationSchema: createCharacterSchema,
        onSubmit: (values, { setFieldError, setSubmitting }) => {
            characterService
                .create({
                    characterName: values.name,
                })
                .then((response) => {
                    if (response.success) {
                        successNotification("Postać utworzona!");
                        navigate(routes.character.dashboard);
                    } else {
                        if (response.code === "ERR_CHARACTER_NAME_EXISTS-409") {
                            setFieldError("characterName", response.message);
                        }
                        mapApiDetailsToFieldError(response, setFieldError);
                    }
                })
                .finally(() => setSubmitting(false));
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
