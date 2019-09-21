module.exports = {
  env: {
    production: {
      presets: ['next/babel', '@zeit/next-typescript/babel']
    },
    development: {
      presets: ['next/babel', '@zeit/next-typescript/babel']
    },
    test: {
      plugins: ['require-context-hook']
    }
  }
}
