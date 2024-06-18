import {StructureBuilder} from 'sanity/structure'
import {MarketConfig, MarketConfigTypes} from './MarketConfig'

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Markets')
    .items([
      ...MarketConfig.map((market) => defineMarketParams(S, market)),
      S.divider(),
      ...S.documentTypeListItems(),
    ])

function defineMarketParams(S: StructureBuilder, market: MarketConfigTypes) {
  return S.listItem()
    .title(market.title)
    .icon(() => market.flag)
    .id(market.id)
    .child(
      S.documentList()
        .title(market.title)
        .filter('market == $marketId')
        .params({marketId: market.id})
        .canHandleIntent(() => {
          return true
        })
        .initialValueTemplates([
          S.initialValueTemplateItem(`currentMarket`, {
            language: market.acceptedLanguages[0],
            market: market.id,
          }),
        ]),
    )
}

export default structure
