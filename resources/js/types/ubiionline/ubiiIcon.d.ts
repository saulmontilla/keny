declare module "ubiionline/icon" {
    import React from "react";

    interface UbiiIconProps extends UbiiIconCommonProps {
        icon: UbiiIcon;
    }

    interface UbiiIconCommonProps extends Omit<React.SVGProps<SVGSVGElement>, 'color'> {
        color?: string | SvgColorOnHover;
        color1?: string | SvgColorOnHover;
        color2?: string | SvgColorOnHover;
        color3?: string | SvgColorOnHover;
        size?: string;
        pointer?: boolean;
    }

    type SvgColorOnHover = [
        /**
         * Color base
         */
        baseColor: string | null,
        /**
         * Color onHover
         */
        hoverColor: string
    ];

    type UbiiIcon =
        'account'
        | 'arrow-u-2'
        | 'arrow-l'
        | 'arrow-l-2'
        | 'arrow-r'
        | 'arrow-r-2'
        | 'arrow-reload'
        | 'avatar'
        | 'books'
        | 'calendar'
        | 'calendar-2'
        | 'c-chart'
        | 'c-calculator-ch'
        | 'c-clip'
        | 'c-email'
        | 'c-file-error'
        | 'c-file-success'
        | 'c-file-update'
        | 'c-file-warning'
        | 'c-home'
        | 'c-mastercard'
        | 'c-pdf'
        | 'c-pointer'
        | 'c-shop'
        | 'c-success'
        | 'c-ubii'
        | 'c-user-blue'
        | 'c-user-white'
        | 'c-users-blue'
        | 'c-visa'
        | 'c-warning'
        | 'c-warning-2'
        | 'check'
        | 'check-2'
        | 'check-3'
        | 'circle'
        | 'circle-2'
        | 'clock'
        | 'clock-2'
        | 'coins'
        | 'copy'
        | 'dni'
        | 'dots'
        | 'dotsh'
        | 'download'
        | 'eye'
        | 'eye-slash'
        | 'file'
        | 'file-2'
        | 'file-search'
        | 'hamburguer'
        | 'home'
        | 'info'
        | 'info-2'
        | 'lock'
        | 'lock-2'
        | 'logout'
        | 'money'
        | 'nut'
        | 'pencil'
        | 'phone'
        | 'phone-2'
        | 'plus'
        | 'question'
        | 'question-2'
        | 'search'
        | 'square'
        | 'share'
        | 'trash'
        | 'trash-2'
        | 'user'
        | 'user-2'
        | 'user-3'
        | 'users'
        | 'users-2'
        | 'x';
}