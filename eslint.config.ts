import { defineConfig } from '@nelsonlaidev/eslint-config';

export default defineConfig({
  tailwindEntryPoint: './src/app/globals.css',

  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        // disable strict rules that break deployment
        'better-tailwindcss/enforce-consistent-class-order': 'off',
        'better-tailwindcss/no-unregistered-classes': [
          'off',
          { ignore: ['toaster', 'dark'] }
        ]
      }
    }
  ]
});
