import { Theme } from "./theme";
import { User } from "./user";

export type PageProps<T extends Record<string, any> = Record<string, any>> = T & {
    auth: {
        user: User;
    };
    theme: Theme;
    native_version: string;
};

export type PageWithLayout<P = {}> = React.FC<P> & {
    layout: (page: React.ReactNode) => React.ReactNode
}