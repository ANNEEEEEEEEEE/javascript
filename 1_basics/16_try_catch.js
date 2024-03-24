/**
 * try...catch
 *
 * 1) 발생시킬때 -> 던진다고한다. (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고 한다. (catch)
 */
function runner() {
    try{
        console.log('Hello');

        throw new Error('큰 문제가 생겼습니다!');

        console.log('Code Factory');
    } catch (e){
        console.log('----catch-----');
        console.log(e); // error 잡을 때 사용

    } finally {
        // try에서 에러가 나든 안나든 무조건 실행
        console.log('----finally-----');
    }
}
runner();
