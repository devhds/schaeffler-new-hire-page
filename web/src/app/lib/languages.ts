import { TranslationsTypes } from '../clientTypes/clientTypes'

export const transformedArrayOfLanguages = (array: TranslationsTypes[]) => {
    return array.map(item => ({
        value: item._key,
        label: item._key.toUpperCase(),
        slug: item.slug,
    }))
}
