import { groq } from 'next-sanity'

export const CURRENT_MARKET_QUERY = groq`*[market == $market && language == $language]{
        ...,
         navigationField{
                ...,
                 video{
                    ...asset->{url, originalFilename}
                },
            },
             footerField{
            ...,
           infoFields[]{
              "internalHref": select(
                  defined(internalHref) => $market + "-" + $language + '/'  + internalHref -> slug.current,
                    null => null
                ),
              _key,
              externalHref,
              infoText,
            },
          },
            contentBlocks[]{
            ...,
             _type == 'videoFullScreen' => {
            ...,
              },
               _type == 'teaser' => {
                ...,
                 teaserItems[]{
                   text,
                   overline,
                   description,
                    _key,
                   image,
                   "href": externalHref,
                    video{
                ...asset->{url, originalFilename}
                }
               }
               }
            },
              "languages": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
             "value": language,
             "label": upper(language),
              "url": "/" + market + "-" + language + "/"
         }
    }[0]`

export const CURRENT_MARKET_WITH_SPECIFY_SLUG_QUERY = groq`*[market == $market && language == $language && slug.current == $slug]{
        ...,
         navigationField{
                ...,
            },
              footerField{
            ...,
           infoFields[]{
              "internalHref": select(
                  defined(internalHref) => $market + "-" + $language + '/'  + internalHref -> slug.current,
                    null => null
                ),
              _key,
              externalHref,
              infoText,
            },
          },
         contentBlocks[]{
          ...,
           _type == 'videoFullScreen' => {
            ...,
                video{
                ...asset->{url, originalFilename}
                }
              },
               _type == 'teaser' => {
                ...,
                 teaserItems[]{
                   text,
                   overline,
                   description,
                    _key,
                   image,
                   "href": externalHref,
                    video{
                ...asset->{url, originalFilename}
                }
               }
               }
         },
         "languages": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
             "value": language,
             "label": upper(language),
              "url": "/" + market + "-" + language + "/" + slug.current
         }
    }[0]`
