import useSvgHandler from '@/Hooks/useSvgHandler'
import React from 'react'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function MoneyIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.9987 5.1665C4.83388 5.1665 4.67276 5.21538 4.53572 5.30695C4.39868 5.39851 4.29187 5.52866 4.2288 5.68093C4.16572 5.83321 4.14922 6.00076 4.18138 6.16241C4.21353 6.32406 4.2929 6.47255 4.40944 6.58909C4.52599 6.70564 4.67447 6.785 4.83612 6.81716C4.99777 6.84931 5.16533 6.83281 5.3176 6.76974C5.46987 6.70666 5.60002 6.59985 5.69159 6.46281C5.78316 6.32577 5.83203 6.16465 5.83203 5.99984C5.83203 5.77882 5.74423 5.56686 5.58795 5.41058C5.43167 5.2543 5.21971 5.1665 4.9987 5.1665ZM14.9987 5.1665C14.8339 5.1665 14.6728 5.21538 14.5357 5.30695C14.3987 5.39851 14.2919 5.52866 14.2288 5.68093C14.1657 5.83321 14.1492 6.00076 14.1814 6.16241C14.2135 6.32406 14.2929 6.47255 14.4094 6.58909C14.526 6.70564 14.6745 6.785 14.8361 6.81716C14.9978 6.84931 15.1653 6.83281 15.3176 6.76974C15.4699 6.70666 15.6 6.59985 15.6916 6.46281C15.7832 6.32577 15.832 6.16465 15.832 5.99984C15.832 5.77882 15.7442 5.56686 15.588 5.41058C15.4317 5.2543 15.2197 5.1665 14.9987 5.1665ZM16.6654 0.166504H3.33203C2.66899 0.166504 2.03311 0.429896 1.56426 0.898737C1.09542 1.36758 0.832031 2.00346 0.832031 2.6665V9.33317C0.832031 9.99621 1.09542 10.6321 1.56426 11.1009C2.03311 11.5698 2.66899 11.8332 3.33203 11.8332H16.6654C17.3284 11.8332 17.9643 11.5698 18.4331 11.1009C18.902 10.6321 19.1654 9.99621 19.1654 9.33317V2.6665C19.1654 2.00346 18.902 1.36758 18.4331 0.898737C17.9643 0.429896 17.3284 0.166504 16.6654 0.166504ZM17.4987 9.33317C17.4987 9.55418 17.4109 9.76615 17.2546 9.92243C17.0983 10.0787 16.8864 10.1665 16.6654 10.1665H3.33203C3.11102 10.1665 2.89906 10.0787 2.74278 9.92243C2.5865 9.76615 2.4987 9.55418 2.4987 9.33317V2.6665C2.4987 2.44549 2.5865 2.23353 2.74278 2.07725C2.89906 1.92097 3.11102 1.83317 3.33203 1.83317H16.6654C16.8864 1.83317 17.0983 1.92097 17.2546 2.07725C17.4109 2.23353 17.4987 2.44549 17.4987 2.6665V9.33317ZM9.9987 3.49984C9.50424 3.49984 9.02089 3.64646 8.60977 3.92116C8.19865 4.19587 7.87822 4.58631 7.689 5.04313C7.49978 5.49994 7.45027 6.00261 7.54673 6.48756C7.6432 6.97252 7.8813 7.41797 8.23093 7.7676C8.58056 8.11724 9.02602 8.35534 9.51097 8.4518C9.99592 8.54826 10.4986 8.49876 10.9554 8.30954C11.4122 8.12032 11.8027 7.79989 12.0774 7.38876C12.3521 6.97764 12.4987 6.49429 12.4987 5.99984C12.4987 5.3368 12.2353 4.70091 11.7665 4.23207C11.2976 3.76323 10.6617 3.49984 9.9987 3.49984ZM9.9987 6.83317C9.83388 6.83317 9.67276 6.7843 9.53572 6.69273C9.39868 6.60116 9.29187 6.47101 9.2288 6.31874C9.16572 6.16647 9.14922 5.99891 9.18138 5.83726C9.21353 5.67561 9.2929 5.52713 9.40944 5.41058C9.52599 5.29404 9.67447 5.21467 9.83612 5.18252C9.99777 5.15036 10.1653 5.16686 10.3176 5.22994C10.4699 5.29301 10.6 5.39982 10.6916 5.53686C10.7832 5.6739 10.832 5.83502 10.832 5.99984C10.832 6.22085 10.7442 6.43281 10.588 6.58909C10.4317 6.74537 10.2197 6.83317 9.9987 6.83317Z" fill="#71839B" />
        </svg>
    )
}