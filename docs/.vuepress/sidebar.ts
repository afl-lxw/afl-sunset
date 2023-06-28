module.exports = {
  '/': [
    {
      title: 'Home',
      collapsable: true,
      children: ['']
    },
    {
      title: 'Categories',
      collapsable: true,
      children: ['/typescriptMD/']
    }
  ],
  '/typescriptMD/': [
    {
      title: 'Typescript Group1',
      collapsable: true,
      children: [
        '/typescriptMD/Typescript1',
        '/typescriptMD/Typescript2',
      ]
    },
    {
      title: 'Typescript Group2',
      collapsable: true,
      children: [
        '/typescriptMD/Typescript1',
        '/typescriptMD/Typescript2',
      ]
    }
  ]
}