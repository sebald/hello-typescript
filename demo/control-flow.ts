function log(input: Error | string[] | { msg: string }) {
  if (input instanceof Error) {
    return input.message;
  }

  if (Array.isArray(input)) {
    return input.join('\n');
  }

  return input.msg;
}
