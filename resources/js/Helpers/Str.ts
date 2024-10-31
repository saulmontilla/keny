export class Str {
    value: string

    constructor (value: string) {
        this.value = value
    }

    startsWith(search: string): boolean {
        const regex = new RegExp(`^${search}`)
        return regex.test(this.value)
    }
    
    endsWith(search: string): boolean {
        const regex = new RegExp(`${search}$`)
        return regex.test(this.value)
    }
}