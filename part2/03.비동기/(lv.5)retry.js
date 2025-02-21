/**
 * [(lv.5)retry.js]
 *
 * - retryRequest 함수를 작성하세요.
 * - promiseFactory()가 실패하면 최대 retries 번까지 재시도합니다.
 * - 성공하면 resolve된 값을 반환하고, 실패하면 마지막 에러를 reject합니다.
 *
 * @param {() => Promise<any>} promiseFactory
 * @param {number} retries
 * @returns {Promise<any>}
 */

function retryRequest(promiseFactory, retries) {
  return promiseFactory().catch((error) => {
    if (retries <= 0) {
      return Promise.reject(error);
    }
    return retryRequest(promiseFactory, retries - 1);
  });
}

// export 를 수정하지 마세요.
export { retryRequest };
