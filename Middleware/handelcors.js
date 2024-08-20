import cors from "cors";

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  optionsSuccessStatus: 204 
};

const corsMiddleware = cors(corsOptions);


export {corsMiddleware}
