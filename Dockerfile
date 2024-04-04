FROM quay.io/Tharusha69/new
RUN git clone https://github.com/Tharusha69/new /root/Tharusha69
WORKDIR /root/Tharusha69
RUN npm install npm@latest
RUN yarn install
EXPOSE 8000
CMD ["npm", "start"]
