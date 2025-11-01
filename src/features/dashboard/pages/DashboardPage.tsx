import {useEffect} from "react";
import {useSelectedCharacter} from "@api/queries/character/queries.ts";
import {useApiErrorHandler} from "@api/errors/useApiErrorHandler.ts";
import {CharacterContainer} from "@features/dashboard/components/CharacterContainer.tsx";
import {CharacterAttributes} from "@features/dashboard/components/CharacterAttributes.tsx";

const DashboardPage = () => {
    const handleApiError = useApiErrorHandler();
    const { data: character, isLoading, isFetching, isError, error } = useSelectedCharacter();
    const loading = isLoading || isFetching;

    useEffect(() => {
        if (isError && error) {
            handleApiError(error);
        }
    }, [isError, error, handleApiError]);

    return (
        <div className="px-4 sm:px-6 py-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_420px] max-w-7xl mx-auto">
                <section className="space-y-4">
                    <CharacterContainer character={character} loading={loading} />
                </section>

                <aside className="space-y-4">
                    <CharacterAttributes character={character} />
                </aside>
            </div>
        </div>
    );
};

export default DashboardPage;
