import {toast} from 'react-toastify';

export const handleApiError = (error) => {
    if (error.response) {
        const status = error.response.status;

        switch (status) {
            case 401:
                toast.error('Zaloguj się aby uzykać dostęp');
                break;
            case 403:
                toast.error('Brak dostępu!');
                break;
            case 500:
                toast.error('Błąd serwera. Spróbuj ponownie później.');
                break;
        }
    } else if (error.request) {
        toast.error('Brak odpowiedzi od serwera. Sprawdź połączenie z internetem.');
    } else {
        toast.error(`Błąd: ${error.message}`);
    }
};
