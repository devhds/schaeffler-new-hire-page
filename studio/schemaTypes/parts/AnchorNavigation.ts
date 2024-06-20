import {defineField} from 'sanity'

const AnchorNavigation = defineField({
  name: 'anchorNavigation',
  title: 'Anchor Navigation To (Optional field)',
  type: 'slug',
  description:
    'Wright down to which anchor tag, should this block linked (see Navigation Links slug)',
  validation: (Rule) =>
    Rule.custom((file, context: any) => {
      if (context.document?.textContentOnly) {
        return true
      } else {
        const currentSlug = file?.current
        const currentNavigationLinks = context.document.navigationField.navigationLinks
        const findAnchorNavigationLink = currentNavigationLinks.filter(
          (item: {slug: {current: string | undefined}}) => item.slug.current === currentSlug,
        )
        if (currentSlug === undefined) {
          return true
        } else if (findAnchorNavigationLink.length > 0) {
          return true
        } else {
          return 'This anchor tag does not exist in Navigation Links slug'
        }
      }
    }),
  hidden: ({document}) => {
    return document?.textContentOnly
  },
})

export default AnchorNavigation
