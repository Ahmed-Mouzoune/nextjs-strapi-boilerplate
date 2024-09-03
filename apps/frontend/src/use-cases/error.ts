import { env } from "@/env.mjs";

export class PublicError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class NotFoundError extends PublicError {
  constructor() {
    super("Resource not found");
    this.name = "NotFoundError";
  }
}

export class StrapiError extends PublicError {
  constructor(message: string) {
    super(env.NODE_ENV === "development" ? message : "Strapi Error");
    this.name = "StrapiError";
  }
}

export class DateError extends PublicError {
  constructor() {
    super("Date error");
    this.name = "DateError";
  }
}

export class NotCreatedError extends PublicError {
  constructor() {
    super("Resource not created");
    this.name = "NotCreatedError";
  }
}

export class RateLimitError extends Error {
  constructor() {
    super("Rate limit exceeded");
    this.name = "RateLimitError";
  }
}
