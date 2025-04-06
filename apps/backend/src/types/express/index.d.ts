declare global {
    namespace Express {
        interface Request {
            userId?: string;
            role?: role;
        } 
    }
}

enum role {
    USER,
    ADMIN
}

export {}