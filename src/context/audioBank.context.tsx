import { FC, createContext, useReducer, ReactNode } from "react";
import sounds1 from '../sounds1.json';
import sounds2 from '../sounds2.json';

console.log(`check`, typeof sounds1);
type AudioBankContextType = {
    changeAudioBank: () => void,
    audioBank: [];
};

export const AudioBankContext = createContext<AudioBankContextType>({
    changeAudioBank: () => { },
    audioBank: [],
});

const enum USER_ACTIONS {
    CHANGE_AUDIO_BANK,
}

type ReducerActionType = {
    type: USER_ACTIONS,
    payload: [];
};

const INITIAL_STATE = {
    audioBank: sounds1
};

type ChildrenType = {
    children: ReactNode;
};

const audioBankReducer = (state: typeof INITIAL_STATE, action: ReducerActionType): typeof INITIAL_STATE => {
    const { type, payload } = action;
    switch (action) {
        case USER_ACTIONS.CHANGE_AUDIO_BANK:
            return {
                audioBank: state.audioBank === sounds1 ? sounds2 : sounds1
            };
        default:
            throw new Error(`Unhandled type ${type} in audioBankReducer`);
    }
};

export const AudioBankProvider: FC<ChildrenType> = ({ children }) => {
    const [{ audioBank }, dispatch] = useReducer(audioBankReducer, INITIAL_STATE);
    const changeAudioBank = () => {
        dispatch(USER_ACTIONS.CHANGE_AUDIO_BANK);
    };

    const value = { audioBank, changeAudioBank };

    return (
        <AudioBankContext.Provider value={value}>{children}</AudioBankContext.Provider>
    );
};