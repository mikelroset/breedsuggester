FROM node:20

WORKDIR /breedsuggester
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev