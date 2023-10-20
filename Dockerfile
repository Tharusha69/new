FROM quay.io/xelectra/xasena:latest
RUN git clone https://github.com/Cola2007/news /root/nipuna
WORKDIR /root/nipuna/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
