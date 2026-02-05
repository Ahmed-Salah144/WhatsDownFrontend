ARG NodeVersion=24.13.0

# 1. Install dependencies
FROM node:${NodeVersion}-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# 2. Rebuild the source code
FROM node:${NodeVersion}-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3. Production runner
FROM node:${NodeVersion}-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public 

EXPOSE 3000
CMD ["npm", "start"]