export interface Theme {
    colors: {
        primary: string;
    };
    register: {
        navbar: {
            logo: string;
            background: string;
        };
        welcome: {
            title: string,
            card: {
                background: string;
                backgroundHover: string;
            }
        };
    },
    login: {
        banner: string,
        title: string,
        subtitle: string,
    }
}