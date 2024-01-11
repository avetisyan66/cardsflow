export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: '2-digit', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-GB', options).replace(/\//g, '.');
}