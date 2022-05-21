FROM node:lts-alpine as builder
WORKDIR /work
RUN npm install --global pnpm
COPY pnpm-lock.yaml ./
RUN pnpm fetch
COPY . .
RUN pnpm install --offline
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm run build

FROM gcr.io/distroless/nodejs:18 as runner
WORKDIR /app
COPY --from=builder /work/.next/standalone ./
COPY --from=builder /work/public ./public
COPY --from=builder /work/.next/static ./.next/static
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
CMD ["server.js"]
