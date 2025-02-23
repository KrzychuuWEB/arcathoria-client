import {toast} from 'react-toastify';

export const handleApiError = (error) => {
    if (error.response) {
        const status = error.response.status;
        const message = error.response.data?.message || 'Coś poszło nie tak';

        switch (status) {
            case 401:
                toast.error('Nie jesteś zalogowany!');
                break;
            case 403:
                toast.error('Brak dostępu!');
                break;
            case 500:
                toast.error('Błąd serwera. Spróbuj ponownie później.');
                break;
            default:
                toast.error(message);
        }
    } else if (error.request) {
        toast.error('Brak odpowiedzi od serwera. Sprawdź połączenie z internetem.');
    } else {
        toast.error(`Błąd: ${error.message}`);
    }
};
