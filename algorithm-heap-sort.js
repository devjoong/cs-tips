/**
 * 힙정렬(Heap Sort)
 * O(NlogN)
 * 
 * 완전 이진 트리 & 최대 힙 구조를 만들고 루트값을 맨 뒤로 보낸 후
 * 맨 뒤의 값을 뺀 나머지를 가지고 
 * 완전이진트리 & 최대 힙 구조를 다시 만들어서 루트값을 나머지의 맨 뒤로 보내는 과정으로 정렬하는 방법
 * 
 * root index = (자식 index - 1) / 2
 * 자식 index = root index * 2 + 1 (두번째 자식 : +1 더)
 * 
 * 맨 위 자식부터 체크하는데, 자식을 기준으로 부모보다 크면 자리바꾸고 그 위 부모랑도 계속 체크해나가는 방법으로 구현해야 함
 * 맨 아래 자식부터 체크하면 위쪽에서 변경이 발생했을 때 아래쪽 또 체크해줘야 하므로 비효율적임
 */


