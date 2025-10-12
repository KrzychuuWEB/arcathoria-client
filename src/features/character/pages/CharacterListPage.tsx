import SelectCharacterCard from "@features/character/components/SelectCharacterCard.tsx";
import EmptyCharacterCard from "@features/character/components/EmptyCharacterCard.tsx";
import { useNavigate } from "react-router-dom";
import { routes } from "@app/routes.ts";

type Character = {
    id: string;
    name: string;
    level: number;
    avatarUrl: string;
};

const mockCharacters: Character[] = [
    { id: "c1", name: "Mag", level: 1, avatarUrl: "/default_avatar.png" },
];

const CharacterListPage = () => {
    const navigate = useNavigate();

    const maxSlots = 4;
    const characters = mockCharacters;
    const emptySlots = Math.max(0, maxSlots - characters.length);

    const handleSelect = (id: string) => navigate(routes.combat.byId(id));
    const handleAdd = () => navigate(routes.character.create);

    return (
        <div className="p-6">
            <h2 className="text-lg text-center text-secondary italic mb-5">
                „Każda dusza ma swoje runy — wybierz te, które opowiedzą twoją historię.”
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {characters.map((ch) => (
                    <SelectCharacterCard key={ch.id} character={ch} onSelect={handleSelect} />
                ))}

                {Array.from({ length: emptySlots }).map((_, i) => (
                    <EmptyCharacterCard key={`empty-${i}`} onAdd={handleAdd} />
                ))}
            </div>
        </div>
    );
};

export default CharacterListPage;
