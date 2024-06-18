import {MdChecklist} from 'react-icons/md'

const RichTextBlocks = [
  {
    type: 'block',
    lists: [
      {title: 'Bullet', value: 'bullet'},
      {title: 'Numbered', value: 'number'},
      {
        title: 'Checkmark',
        value: 'checkmark',
        icon: MdChecklist,
      },
    ],
    styles: [
      {title: 'Heading 4', value: 'h4'},
      {
        title: 'Body Large',
        value: 'bodyLarge',
      },
    ],
  },
]

export default RichTextBlocks
