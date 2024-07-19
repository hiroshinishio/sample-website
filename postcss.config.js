module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          { content: ['./src/**/*.js', './public/index.html'] },
        ]
      : undefined,
  ],