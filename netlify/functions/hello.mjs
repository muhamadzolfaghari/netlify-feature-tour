import { Context } from "@netlify/functions";

export default async (req, context) => {
  return new Response("Hello, world!")
}