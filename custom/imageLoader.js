export default function myImageLoader({ src, width, quality, type }) {
    switch(type) {
      case 'PLACEHOLDER':
        {
          return `https://placehold.co/${src}`
        }
      default :
      {
        return `https://i.imgur.com/${src}`
      }
    }
    return 
  }