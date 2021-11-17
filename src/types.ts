export type ATConfig = {
  username: string,
  apiKey: string,
  from: string|number
}

export type ATSmsPayload = {
  to: string|string[],
  from: string,
  message: string
}
