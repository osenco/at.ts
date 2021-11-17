export type ATConfig = {
  username: string,
  apiKey: string,
  from: string|number|null
}

export type ATSmsPayload = {
  to: string|string[],
  from: string|number|null,
  message: string
}
