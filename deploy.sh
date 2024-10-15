#!/bin/bash

# 현재 브랜치 이름 저장
current_branch=$(git rev-parse --abbrev-ref HEAD)

# 프로젝트 빌드
pnpm run export

# gh-pages 브랜치로 전환
git checkout gh-pages

# 이전 빌드 파일 삭제
git rm -rf .

# out 디렉토리의 내용을 루트로 이동
mv out/* .
rm -rf out

# .nojekyll 파일 생성
touch .nojekyll

# 변경사항 커밋 및 푸시
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# 원래 브랜치로 돌아가기
git checkout $current_branch

echo "배포가 완료되었습니다."
