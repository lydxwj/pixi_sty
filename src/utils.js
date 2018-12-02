const designW = 750;
export const bodyW = document.body.clientWidth;
export function sizeToPx(x) {
  return x / designW * bodyW;
}