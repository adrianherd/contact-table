import { ContactEntity } from "./ContactEntity";

export const getMembersCollection = (): Promise<ContactEntity[]> => {
    return new Promise<ContactEntity[]>(() => []);
};
