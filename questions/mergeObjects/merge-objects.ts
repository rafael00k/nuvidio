export function mergeObjects(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
    const mergedObject: Record<string, any> = { ...obj1 };
    for (const key in obj2) {
        const value1 = obj1[key];
        const value2 = obj2[key];
        const isValue1Array = Array.isArray(value1);
        const isValue2Array = Array.isArray(value2);
        const isValue1Object = typeof obj1[key] === 'object';
        const isValue2Object = typeof obj2[key] === 'object';
        if(isValue2Array) {
            if(isValue1Array) {
                mergedObject[key] = [...value1, ...value2];
                continue;
            }
            mergedObject[key] = value2;
            continue;
        }
        if (isValue2Object) {
          if (isValue1Object) {
            mergedObject[key] = mergeObjects(value1, value2);
            continue;
          }
          mergedObject[key] = { ...value2 };
          continue;  
        }
        
        mergedObject[key] = value2;
        
    }
    return mergedObject;
}