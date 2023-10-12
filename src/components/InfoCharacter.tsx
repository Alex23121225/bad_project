import {
    InfoCharacterProps,
} from "../types.ts";

export const InfoCharacter = ({name, value}: InfoCharacterProps) => {
    return (
        <div>
            <span className="title">{name}: {value} </span>
        </div>
    );
};

