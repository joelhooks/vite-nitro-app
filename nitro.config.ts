export default defineNitroConfig({
  renderer: './renderer.ts',
  devProxy: {
    '/app/assets/*': 'http://localhost:5173/app/assets/*'
  }
})