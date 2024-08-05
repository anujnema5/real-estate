export function extractProperty(inputString: string) {
    const pattern = /\(`(.*?)`\)/;

    const match = inputString.match(pattern);

    if (match) {
        return match[1];
    } else {
        return null; 
    }
}