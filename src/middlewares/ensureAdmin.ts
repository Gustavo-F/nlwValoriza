import { NextFunction, Request, Response } from 'express';

import { UserRepository } from '../repositories/UserRepository';

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const { user_id } = request;
    const { admin } = await UserRepository.findOneBy({id: user_id});

    if (admin) {
        return next();
    }

    return response.status(401).json({error: 'Unauthorized'});
}