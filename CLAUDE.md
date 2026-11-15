# 和 AI 合作的规矩（Git）

## 每次动手前
- 先运行 git status，工作区不干净就停下来告诉我
- 新功能一律开新分支，不直接改 main

## 绿灯：可以直接做，做完告诉我
- git status / diff / log，git add / commit / pull
- 开分支、推送分支、开 PR
- 每完成一小步就提交一次，提交说明用中文写清楚

## 黄灯：准备好以后停下，等我同意
- 合并 PR、推送到 main、删除分支、发布 Release

## 红灯：绝对不要自己做，必须先问我
- git push --force、git reset --hard、git clean
- 删除远程分支或仓库、修改 git config --global

## 汇报
- 列出执行过的每条命令和结果
- 遇到报错先说清楚原因，再说打算怎么处理
