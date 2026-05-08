import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**',
            '**/coverage/**',
            '**/.next/**',
            '**/.turbo/**',
            '**/.cache/**',
            '**/.vercel/**',
            '**/generated/**',
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    prettier,
    {
        files: ['**/*.{js,cjs,mjs,ts,cts,mts}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
            },
        },
        rules: {
            'no-console': 'off',
        },
    },
    {
        files: ['**/*.{js,cjs,mjs}'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
    {
        files: ['**/*.{ts,cts,mts}'],
        rules: {
            '@typescript-eslint/consistent-type-imports': [
                'warn',
                {
                    prefer: 'type-imports',
                    fixStyle: 'inline-type-imports',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    {
        files: ['**/*.md/*.js', '**/*.md/*.ts'],
        rules: {
            'no-undef': 'off',
        },
    },
    {
        files: [
            'src/**/*.service.ts',
            'src/**/*.controller.ts',
            'src/**/*.guard.ts',
            'src/**/*.repository.ts',
            'src/**/*.module.ts',
        ],
        rules: {
            '@typescript-eslint/consistent-type-imports': 'off',
        },
    },
);
