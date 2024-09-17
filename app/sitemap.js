export default function sitemap() {
    return [
      {
        url: 'https://diegovivetour.com',
        lastModified: new Date(),
        alternates: {
          languages: {
            es: 'https://diegovivetour.com/es',
            en: 'https://diegovivetour.com/en',
            it: 'https://diegovivetour.com/it',
          },
        },
      },
      {
        url: 'https://diegovivetour.com/barcelona',
        lastModified: new Date(),
        alternates: {
          languages: {
            es: 'https://diegovivetour.com/es/barcelona',
            en: 'https://diegovivetour.com/en/barcelona',
            it: 'https://diegovivetour.com/it/barcelona',
          },
        },
      },
    ]
}