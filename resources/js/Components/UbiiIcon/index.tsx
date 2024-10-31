import React from 'react'
import { UbiiIconProps } from 'ubiionline/icon'
import CheckIcon from './CheckIcon'
import CheckIcon2 from './CheckIcon2'
import ColorizedPointerIcon from './Colorized/ColorizedPointerIcon'
import CircleIcon from './CircleIcon'
import CircleIcon2 from './CircleIcon2'
import EyeIcon from './EyeIcon'
import EyeSlashIcon from './EyeSlashIcon'
import FileIcon from './FileIcon'
import FileSearchIcon from './FileSearchIcon'
import LockIcon from './LockIcon'
import PencilIcon from './PencilIcon'
import TrashIcon from './TrashIcon'
import XIcon from './XIcon'
import ColorizedClipIcon from './Colorized/ColorizedClipIcon'
import ShareIcon from './ShareIcon'
import InfoIcon from './InfoIcon'
import CopyIcon from './CopyIcon'
import ColorizedChartIcon from './Colorized/ColorizedChartIcon'
import CoinsIcon from './CoinsIcon'
import ColorizedEmailIcon from './Colorized/ColorizedEmailIcon'
import QuestionIcon from './QuestionIcon'
import QuestionIcon2 from './QuestionIcon2'
import UsersIcon from './UsersIcon'
import DownloadIcon from './DownloadIcon'
import SearchIcon from './SearchIcon'
import ArrowRigthIcon from './ArrowRigthIcon'
import ArrowRigthIcon2 from './ArrowRigthIcon2'
import ClockIcon from './ClockIcon'
import PlusIcon from './PlusIcon'
import ArrowLeftIcon from './ArrowLeftIcon'
import AccountIcon from './AccountIcon'
import ColorizedHomeIcon from './Colorized/ColorizedHomeIcon'
import BooksIcon from './BooksIcon'
import UserIcon from './UserIcon'
import ColorizedChinesseCalculator from './Colorized/ColorizedChinesseCalculator'
import DniIcon from './DniIcon'
import ColorizedPdfIcon from './Colorized/ColorizedPdfIcon'
import ClockIcon2 from './ClockIcon2'
import NutIcon from './NutIcon'
import LockIcon2 from './LockIcon2'
import PhoneIcon from './PhoneIcon'
import PhoneIcon2 from './PhoneIcon2'
import ColorizedWarningIcon from './Colorized/ColorizedWarningIcon'
import CheckIcon3 from './CheckIcon3'
import SquareIcon from './SquareIcon'
import DotsHIcon from './DotsHIcon'
import ArrowReloadIcon from './ArrowReloadIcon'
import UserIcon2 from './UserIcon2'
import ColorizedUserIconWhite from './Colorized/ColorizedUserIconWhite'
import ColorizedUserIconBlue from './Colorized/ColorizedUserIconBlue'
import ColorizedUsersBlue from './Colorized/ColorizedUsersBlue'
import ColorizedWarningIcon2 from './Colorized/ColorizedWarningIcon2'
import ColorizedSuccessIcon from './Colorized/ColorizedSuccessIcon'
import CalendarIcon from './CalendarIcon'
import FileIcon2 from './FileIcon2'
import ArrowLeftIcon2 from './ArrowLeftIcon2'
import ColorizedShopIcon from './Colorized/ColorizedShopIcon'
import TrashIcon2 from './TrashIcon2'
import AvatarIcon from './AvatarIcon'
import LogoutIcon from './LogoutIcon'
import HomeIcon from './HomeIcon'
import UserIcon3 from './UserIcon3'
import MoneyIcon from './MoneyIcon'
import CalendarIcon2 from './CalendarIcon2'
import HamburguerIcon from './HamburguerIcon'
import ColorizedFileSuccess from './Colorized/ColorizedFileSuccess'
import ColorizedFileError from './Colorized/ColorizedFileError'
import ArrowUpIcon2 from './ArrowUpIcon2'
import ColorizedFileWarning from './Colorized/ColorizedFileWarning'
import ColorizedUbiiLogo from './Colorized/ColorizedUbiiLogo'
import DotsIcon from './DotsIcon'
import InfoIcon2 from './InfoIcon2'
import ColorizedFileUpdate from './Colorized/ColorizedFileUpdate'
import ColorizedMastercardIcon from './Colorized/ColorizedMastercardIcon'
import ColorizedVisaIcon from './Colorized/ColorizedVisaIcon'

const UbiiIcon = React.forwardRef<SVGSVGElement, UbiiIconProps>((props, ref) => {
    const { icon, ...rest } = props

    switch (props.icon) {
        case 'account': return <AccountIcon {...rest} />
        case 'arrow-u-2': return <ArrowUpIcon2 {...rest} />
        case 'arrow-l': return <ArrowLeftIcon {...rest} />
        case 'arrow-l-2': return <ArrowLeftIcon2 {...rest} />
        case 'arrow-r': return <ArrowRigthIcon {...rest} />
        case 'arrow-r-2': return <ArrowRigthIcon2 {...rest} />
        case 'arrow-reload': return <ArrowReloadIcon {...rest} />
        case 'avatar': return <AvatarIcon {...rest} />
        case 'books': return <BooksIcon {...rest} />
        case 'calendar': return <CalendarIcon {...rest} />
        case 'calendar-2': return <CalendarIcon2 {...rest} />
        case 'c-chart': return <ColorizedChartIcon {...rest} />
        case 'c-calculator-ch': return <ColorizedChinesseCalculator {...rest} />
        case 'c-clip': return <ColorizedClipIcon {...rest} />
        case 'c-email': return <ColorizedEmailIcon {...rest} />
        case 'c-file-error': return <ColorizedFileError {...rest} />
        case 'c-file-success': return <ColorizedFileSuccess {...rest} />
        case 'c-file-update': return <ColorizedFileUpdate {...rest} />
        case 'c-file-warning': return <ColorizedFileWarning {...rest} />
        case 'c-home': return <ColorizedHomeIcon {...rest} />
        case 'c-mastercard': return <ColorizedMastercardIcon {...rest} />
        case 'c-pdf': return <ColorizedPdfIcon {...rest} />
        case 'c-shop': return <ColorizedShopIcon {...rest} />
        case 'c-success': return <ColorizedSuccessIcon {...rest} />
        case 'c-ubii': return <ColorizedUbiiLogo {...rest} />
        case 'c-user-blue': return <ColorizedUserIconBlue {...rest} />
        case 'c-user-white': return <ColorizedUserIconWhite {...rest} />
        case 'c-users-blue': return <ColorizedUsersBlue {...rest} />
        case 'c-pointer': return <ColorizedPointerIcon {...rest} />
        case 'c-visa': return <ColorizedVisaIcon {...rest} />
        case 'c-warning': return <ColorizedWarningIcon {...rest} />
        case 'c-warning-2': return <ColorizedWarningIcon2 {...rest} />
        case 'check': return <CheckIcon {...rest} ref={ref} />
        case 'check-2': return <CheckIcon2 {...rest} />
        case 'check-3': return <CheckIcon3 {...rest} />
        case 'circle': return <CircleIcon {...rest} />
        case 'circle-2': return <CircleIcon2 {...rest} />
        case 'clock': return <ClockIcon {...rest} />
        case 'clock-2': return <ClockIcon2 {...rest} />
        case 'coins': return <CoinsIcon {...rest} />
        case 'copy': return <CopyIcon {...rest} ref={ref} />
        case 'dni': return <DniIcon {...rest} />
        case 'dots': return <DotsIcon {...rest} />
        case 'dotsh': return <DotsHIcon {...rest} />
        case 'download': return <DownloadIcon {...rest} />
        case 'eye': return <EyeIcon {...rest} />
        case 'eye-slash': return <EyeSlashIcon {...rest} />
        case 'file': return <FileIcon {...rest} />
        case 'file-2': return <FileIcon2 {...rest} />
        case 'file-search': return <FileSearchIcon {...rest} />
        case 'hamburguer': return <HamburguerIcon {...rest} />
        case 'home': return <HomeIcon {...rest} />
        case 'info': return <InfoIcon {...rest} />
        case 'info-2': return <InfoIcon2 {...rest} />
        case 'lock': return <LockIcon {...rest} />
        case 'lock-2': return <LockIcon2 {...rest} />
        case 'logout': return <LogoutIcon {...rest} />
        case 'money': return <MoneyIcon {...rest} />
        case 'nut': return <NutIcon {...rest} />
        case 'pencil': return <PencilIcon {...rest} />
        case 'phone': return <PhoneIcon {...rest} />
        case 'phone-2': return <PhoneIcon2 {...rest} />
        case 'plus': return <PlusIcon {...rest} />
        case 'question': return <QuestionIcon {...rest} />
        case 'question-2': return <QuestionIcon2 {...rest} />
        case 'search': return <SearchIcon {...rest} />
        case 'share': return <ShareIcon {...rest} />
        case 'square': return <SquareIcon {...rest} />
        case 'trash': return <TrashIcon {...rest} />
        case 'trash-2': return <TrashIcon2 {...rest} />
        case 'user': return <UserIcon {...rest} />
        case 'user-2': return <UserIcon2 {...rest} />
        case 'user-3': return <UserIcon3 {...rest} />
        case 'users': return <UsersIcon {...rest} />
        case 'users-2': return <UsersIcon {...rest} />
        case 'x': return <XIcon {...rest} />
    }
})

export default UbiiIcon