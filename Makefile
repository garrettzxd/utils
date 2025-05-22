utilsPath = ./packages/utils/

# 初始化整个仓库
init:
	yarn bootstrap

# 发布有改动的npm包
publish:
	lerna publish --no-private

# 生成@b2b/utils
utils-doc:
	yarn workspace @b2b/utils doc
