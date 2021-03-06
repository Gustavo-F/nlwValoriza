import { NextFunction, Request, Response } from "express";
import { verify} from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;
    
    if (!authToken) {
        return response.status(401).end();
    }
    
    const [, token] = authToken.split(' ');
    
    try {
        const { sub } = verify(token, '3331f91539a9f76fbb21bc12af9a717c') as IPayload;
        
        request.user_id = sub;
        
        return next();
    } catch (error) {
        return response.status(401).end();
    }
}