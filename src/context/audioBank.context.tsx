import { FC, createContext, useReducer, ReactNode } from "react";
import sounds1 from '../sounds1.json';
import sounds2 from '../sounds2.json';

type AudioBankContextType = {
    changeAudioBank: () => void,
    setCurrentSound: (soundName: string) => void,
    audioBank: typeof sounds1,
    currentSound: string,
};

export const AudioBankContext = createContext<AudioBankContextType>({
    changeAudioBank: () => { },
    setCurrentSound: () => { },
    audioBank: sounds1,
    currentSound: "",
});

const enum USER_ACTIONS {
    CHANGE_AUDIO_BANK = "CHANGE_AUDIO_BANK",
    SET_CURRENT_SOUND = "SET_CURRENT_SOUND",
};

type ReducerActionType = {
    type: USER_ACTIONS,
    payload?: any;
};

const INITIAL_STATE = {
    audioBank: sounds1,
    currentSound: "",
};

type ChildrenType = {
    children: ReactNode;
};

const audioBankReducer = (state: typeof INITIAL_STATE, action: ReducerActionType): typeof INITIAL_STATE => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTIONS.CHANGE_AUDIO_BANK:
            return {
                ...state,
                audioBank: state.audioBank === sounds1 ? sounds2 : sounds1
            };
        case USER_ACTIONS.SET_CURRENT_SOUND:
            return {
                ...state,
                currentSound: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in audioBankReducer`);
    }
};

export const AudioBankProvider: FC<ChildrenType> = ({ children }) => {
    const [{ audioBank, currentSound }, dispatch] = useReducer(audioBankReducer, INITIAL_STATE);
    const changeAudioBank = () => {
        dispatch({ type: USER_ACTIONS.CHANGE_AUDIO_BANK });
    };
    const setCurrentSound = (soundName: string) => {
        dispatch({ type: USER_ACTIONS.SET_CURRENT_SOUND, payload: soundName});
    };

    const value = { audioBank, currentSound, changeAudioBank, setCurrentSound };

    return (
        <AudioBankContext.Provider value={value}>{children}</AudioBankContext.Provider>
    );
};