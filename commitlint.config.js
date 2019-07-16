module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-min-length': [2, 'always', '5'],
    'subject-max-length': [2, 'always', '50'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'deps',
        'chore',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'style',
        'test',
      ],
    ],
  },
};
