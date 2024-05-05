export function undefinedToNull(input: Array<any> | Object): Array<any> | Object {
    if (Array.isArray(input)) {
        return input.map((item) => typeof item === 'undefined' ? null : item)
    }

    return Object.entries(input).reduce((formattedObject, [key, value]) => {
        formattedObject[key as keyof Object] = value !== undefined ? value : null;
        return formattedObject;
    }, {});
   
}