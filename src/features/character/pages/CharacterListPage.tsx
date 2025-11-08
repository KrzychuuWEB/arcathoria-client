import SelectCharacterCard from "@features/character/components/SelectCharacterCard.tsx";
import EmptyCharacterCard from "@features/character/components/EmptyCharacterCard.tsx";
import { useNavigate } from "react-router-dom";
import { routes } from "@app/routes.ts";
import { useApiErrorHandler } from "@api/errors/useApiErrorHandler.ts";
import { useEffect } from "react";
import { useCharacters } from "@api/queries/character/queries.ts";
import { MAX_SLOTS } from "@domain/character/types.ts";
import { ArcathoriaSkeleton } from "@shared/components/ArcathoriaSkeleton.tsx";
import { useSelectCharacter } from "@api/orval.ts";
import { setSelectCharacterSessionOptimistic } from "@app/guard/query.ts";
import useNotification from "@shared/hooks/useNotification.ts";
import type { SelectCharacterDTO } from "@api/orval.schemas.ts";

const CharacterListPage = () => {
    const navigate = useNavigate();
    const handleApiError = useApiErrorHandler();
    const { successNotify } = useNotification();

    const { data: characters = [], isLoading, isFetching, isError, error } = useCharacters();
    const loading = isLoading || isFetching;

    const selectCharacterMutation = useSelectCharacter({
        mutation: {
            onSuccess: () => {
                setSelectCharacterSessionOptimistic();
                successNotify("Postać została wybrana");
                navigate(routes.dashboard.base);
            },
            onError: (error) => handleApiError(error),
        },
    });

    useEffect(() => {
        if (isError && error) {
            handleApiError(error);
        }
    }, [isError, error, handleApiError]);

    const emptySlots = Math.max(0, MAX_SLOTS - characters.length);

    const handleSelect = (id: string) => {
        selectCharacterMutation.mutate({
            data: {
                characterId: id,
            } satisfies SelectCharacterDTO,
        });
    };
    const handleAdd = () => navigate(routes.character.create);

    return (
        <div className="p-6">
            <h2 className="text-lg text-center text-secondary italic mb-5">
                „Każda dusza ma swoje runy — wybierz te, które opowiedzą twoją historię.”
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {loading ? (
                    Array.from({ length: MAX_SLOTS }).map((_, i) => (
                        <div key={`skeleton-${i}`} className="w-full">
                            <ArcathoriaSkeleton variant="block" height={120} radius={6} />
                        </div>
                    ))
                ) : (
                    <>
                        {characters.map((ch) => (
                            <SelectCharacterCard
                                key={ch.id}
                                character={ch}
                                onSelect={() => handleSelect(ch.id)}
                            />
                        ))}

                        {Array.from({ length: emptySlots }).map((_, i) => (
                            <EmptyCharacterCard key={`empty-${i}`} onAdd={handleAdd} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default CharacterListPage;
