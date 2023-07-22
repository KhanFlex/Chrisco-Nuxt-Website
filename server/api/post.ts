function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default defineEventHandler(async (event) => {
  await timeout(2000);
  return { message: "blowtorhc" };
});
