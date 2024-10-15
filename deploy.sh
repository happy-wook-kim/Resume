#!/bin/bash

# 현재 브랜치 이름 저장
current_branch=$(git rev-parse --abbrev-ref HEAD)

# 프로젝트 빌드
pnpm run export

# 임시 디렉토리 생성 및 빌드 파일 복사
tmp_dir=$(mktemp -d)
cp -R out/* $tmp_dir

# gh-pages 브랜치로 전환 (없으면 생성)
if git show-ref --quiet refs/heads/gh-pages; then
    git checkout gh-pages
else
    git checkout --orphan gh-pages
    git rm -rf .
fi

# 이전 빌드 파일 삭제
git rm -rf .

# 임시 디렉토리의 내용을 현재 디렉토리로 복사
cp -R $tmp_dir/* .
rm -rf $tmp_dir

# .nojekyll 파일 생성
touch .nojekyll

# 변경사항 커밋 및 푸시
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# 원래 브랜치로 돌아가기
git checkout $current_branch

echo "배포가 완료되었습니다."
