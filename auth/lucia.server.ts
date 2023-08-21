import { lucia } from "lucia";
import { web } from "lucia/middleware";

// expect error
export const auth = lucia({
	env: process.dev ? "DEV" : "PROD",
	middleware: web(),
	sessionCookie: {
		expires: false
	}
});

export type Auth = typeof auth;