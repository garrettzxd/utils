module.exports = {
  extends: [
    '@commitlint/config-conventional',
    '@commitlint/config-lerna-scopes',
  ],
  rules: {
    'type-tips': [2, 'always'],
    'scope-need': [2, 'always'],
    'scope-enum': [2, 'always', ['components', 'constants', 'regular', 'utils', 'config', 'doc']],
  },
  plugins: [
    {
      rules: {
        'type-tips': ({ type }) => {
          const types = ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'];
          return [
            types.includes(type),
            'Error: 必须是以下类型之一: [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]',
          ];
        },
        'scope-need': ({ scope }) => {
          const scopeName = scope === 'root' ? true : scope;
          return [!!scopeName, 'Error: 请明确提交内容更改包范围, 例: feat(regular): xxx'];
        },
      },
    },
  ],
};
