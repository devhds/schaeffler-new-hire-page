// ./sanity/lib/queries.ts

import { groq } from 'next-sanity'

export const CURRENT_MARKET_QUERY = groq`*[market == $market && language == $language]{
        ...,
         navigationField{
                ...,
                 video{
                    ...asset->{url, originalFilename}
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
            }
    }[0]`

export const TRANSLATIONS_QUERY = groq`*[_type == "translation.metadata" && slug.current == $slug]{
         ...,     
    }[0]`

export const CURRENT_MARKET_WITH_SPECIFY_SLUG_QUERY = groq`*[market == $market && language == $language && slug.current == $slug]{
        ...,
         navigationField{
                ...,
                 video{
                    ...asset->{url, originalFilename}
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
         }
    }[0]`
