RUN npm install npm@latest
RUN yarn install
EXPOSE 8000
CMD ["npm", "start"]
