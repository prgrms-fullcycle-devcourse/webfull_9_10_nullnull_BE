# nullnull BE

### 브랜치 / 배포

- 개발 서버(Render)는 `dev` 브랜치를 기준으로 배포한다.
- 운영 서버(Render)는 `main` 브랜치를 기준으로 배포한다.
- 현재 로컬 / dev / prod는 같은 Supabase 프로젝트를 바라본다.

### 환경변수

- 실제 값은 `.env`에 작성한다.
- 변동사항은 `.env.example`에 반영한다.
- Render production 값은 Render 환경변수에서만 관리한다.

### 로컬 실행

```bash
pnpm install
pnpm prisma generate
pnpm start:dev
```

### Prisma 규칙

- 앱 런타임은 `DATABASE_URL`을 사용한다.
- Prisma CLI / migration은 `DIRECT_URL`을 사용한다.
- 스키마 변경 후에는 아래 순서로 확인한다.

```bash
pnpm prisma:check
pnpm prisma migrate dev --name <migration_name>
```

### Docker 확인

```bash
docker build -t <image_name> .
docker run --env-file .env -p 4000:4000 <image_name>
```

헬스체크:

```bash
curl http://localhost:4000/health
```

### 문서

- 작업 전: [AGENTS.md](AGENTS.md)
- 문서 색인: [docs/README.md](docs/README.md)
- 컨벤션: [docs/conventions/README.md](docs/conventions/README.md)
