import { Theme } from '@/types/theme'
import { usePage } from '@inertiajs/react'
import React from 'react'

export default function useTheme(): Theme {
    const theme = usePage().props.theme

    return theme as Theme
}
