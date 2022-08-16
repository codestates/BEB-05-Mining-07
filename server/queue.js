const express = require('express');
class Queue 
{
    constructor() {
      this.storage = [];	// 값을 저장할 객체
      this.front = 0;	// 첫 원소를 가리킬 포인터
      this.rear = 0;	// 마지막 원소를 가리킬 포인터
    }
    size() {
        if (this.storage.length === 0) {
            return 0;
          } else {
            return this.rear - this.front + 1;
          }
    }
    add(value) {
        // 큐에 데이터가 아무것도 없는 경우
        if (this.size() === 0) {
          this.storage[0] = value;
        } else {
          this.rear += 1;
          this.storage[this.rear] = value;
        }
    }
    pop() {
        let temp;	
        if (this.front === this.rear) {
          temp = this.storage[this.front];
          delete this.storage[this.front];
          this.front = 0;
          this.rear = 0;
        } else {
          temp = this.storage[this.front];
          delete this.storage[this.front];
          this.front += 1;
        }
        return temp;
      }
}
module.exports = Queue;