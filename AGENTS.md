# AGENTS.md

## Project goal
이 저장소는 overtura org의 짧은 Node/CLI/API 성격의 실험 저장소다.
핵심은 실행 가능한 최소 결과물을 빠르게 내고, 입력/출력 흐름이 자연스럽게 이어지는지 검증하는 것이다.

## Commands
- install: pnpm install
- dev: pnpm dev
- lint: pnpm lint
- typecheck: pnpm typecheck
- test: pnpm test
- build: pnpm build
- full check: pnpm check

## Done definition
- 최소 실행 경로가 동작한다.
- 입력과 출력 예시가 README에 있다.
- 실패 입력 또는 예외 상황 최소 1개를 다룬다.
- PR 요약에 검증 결과가 있다.

## Review guidelines
- 리뷰는 한국어로 작성한다.
- 사소한 취향 논쟁보다 broken flow, 입력 검증 누락, 예외 처리 누락, 타입/빌드 오류를 우선한다.
